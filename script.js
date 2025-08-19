document.addEventListener('DOMContentLoaded', function() {
    const cnpjInput = document.getElementById('cnpjInput');
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const resultContainer = document.getElementById('resultContainer');
    const resultContent = document.getElementById('resultContent');

    // Máscara para o CNPJ
    cnpjInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        e.target.value = value;
    });

    // Consultar CNPJ
    searchButton.addEventListener('click', consultarCNPJ);
    
    // Limpar resultados
    clearButton.addEventListener('click', function() {
        cnpjInput.value = '';
        resultContainer.style.display = 'none';
        error.style.display = 'none';
    });

    // Tecla Enter também consulta
    cnpjInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            consultarCNPJ();
        }
    });

    async function consultarCNPJ() {
        const cnpj = cnpjInput.value.trim();
        
        // Validação básica do CNPJ
        if (!cnpj || cnpj.length !== 14) {
            showError('Por favor, insira um CNPJ válido com 14 dígitos.');
            return;
        }
        
        // Formatar CNPJ para exibição
        const cnpjFormatado = formatarCNPJ(cnpj);
        
        // Limpar resultados anteriores
        error.style.display = 'none';
        resultContainer.style.display = 'none';
        loading.style.display = 'block';
        
        try {
            const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
            
            if (!response.ok) {
                throw new Error('CNPJ não encontrado ou erro na API');
            }
            
            const data = await response.json();
            exibirResultados(data, cnpjFormatado);
            
        } catch (err) {
            showError('Erro ao consultar CNPJ: ' + err.message);
        } finally {
            loading.style.display = 'none';
        }
    }
    
    function exibirResultados(data, cnpjFormatado) {
        resultContent.innerHTML = '';
        
        // Dados básicos
        addResultItem('CNPJ', cnpjFormatado);
        addResultItem('Razão Social', data.razao_social);
        addResultItem('Nome Fantasia', data.nome_fantasia || 'Não informado');
        addResultItem('Data de Abertura', formatarData(data.data_inicio_atividade));
        addResultItem('Situação Cadastral', data.descricao_situacao_cadastral);
        addResultItem('Natureza Jurídica', data.natureza_juridica);
        addResultItem('Porte da Empresa', data.porte.descricao);
        
        // Endereço
        addResultItem('CEP', formatarCEP(data.cep));
        addResultItem('Endereço', `${data.logradouro}, ${data.numero || 'S/N'}`);
        addResultItem('Complemento', data.complemento || 'Não informado');
        addResultItem('Bairro', data.bairro);
        addResultItem('Município', `${data.municipio} - ${data.uf}`);
        
        // Contato
        addResultItem('Telefone', formatarTelefone(data.ddd_telefone_1));
        addResultItem('Telefone 2', formatarTelefone(data.ddd_telefone_2));
        addResultItem('Email', data.correio_eletronico || 'Não informado');
        
        // Atividades
        if (data.cnae_fiscal) {
            addResultItem('CNAE Principal', `${data.cnae_fiscal} - ${data.cnae_fiscal_descricao}`);
        }
        
        if (data.cnaes_secundarios && data.cnaes_secundarios.length > 0) {
            const cnaesSecundarios = data.cnaes_secundarios.map(cnae => 
                `${cnae.codigo} - ${cnae.descricao}`).join('<br>');
            addResultItem('CNAEs Secundários', cnaesSecundarios);
        }
        
        resultContainer.style.display = 'block';
    }
    
    function addResultItem(label, value) {
        if (!value || value === 'Não informado') return;
        
        const item = document.createElement('div');
        item.className = 'result-item';
        item.innerHTML = `<strong>${label}</strong><span>${value}</span>`;
        resultContent.appendChild(item);
    }
    
    function showError(message) {
        error.textContent = message;
        error.style.display = 'block';
    }
    
    // Funções auxiliares de formatação
    function formatarCNPJ(cnpj) {
        return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
    
    function formatarCEP(cep) {
        if (!cep) return 'Não informado';
        return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
    }
    
    function formatarData(data) {
        if (!data) return 'Não informado';
        return new Date(data).toLocaleDateString('pt-BR');
    }
    
    function formatarTelefone(telefone) {
        if (!telefone) return 'Não informado';
        return telefone.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
    }
});