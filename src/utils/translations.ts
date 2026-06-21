export type Language = 'pt' | 'en' | 'es' | 'fr' | 'de';

export interface TranslationDictionary {
  // Sidebar
  dashboard: string;
  clients: string;
  vehicles: string;
  drivers: string;
  travels: string;
  commercial: string;
  reports: string;
  settings: string;
  logged_as: string;
  logout: string;

  // Header
  search_placeholder: string;
  theme_selector: string;
  gravar_clientes_btn: string;
  orcamento_btn: string;
  nova_viagem_btn: string;
  adicionar_veiculo_btn: string;
  cadastrar_motorista_btn: string;
  exportar_pdf_btn: string;
  day: string;
  week: string;
  month: string;
  year: string;

  // DashboardView
  valor_gerado: string;
  valor_orcado: string;
  frota_ativa: string;
  motoristas_prontos: string;
  viagens_realizadas: string;
  alertas_manutencao: string;
  desempenho_mensal: string;
  meta_mensal: string;
  executivo_conta: string;
  viagens_recentes: string;
  ver_agenda_completa: string;
  no_travels: string;
  remover_viagem: string;

  // Tables
  tabela_id: string;
  tabela_data: string;
  tabela_cliente: string;
  tabela_veiculo: string;
  tabela_motorista: string;
  tabela_status: string;
  tabela_valor: string;

  // Statuses
  status_completo: string;
  status_em_viagem: string;
  status_agendado: string;
  status_disponivel: string;
  status_folga: string;
  status_manutencao: string;

  // ClientsView
  clientes_cadastrados: string;
  novo_cliente: string;
  nome_fantasia: string;
  razao_social: string;
  cnpj: string;
  cidade: string;
  uf: string;
  executivo: string;
  acoes: string;
  salvar: string;
  cancelar: string;
  editar_cliente: string;
  adicionar_cliente: string;
  sucesso_salvar: string;
  sucesso_excluir: string;
  excluir_confirmar: string;

  // VehiclesView
  veiculos_cadastrados: string;
  novo_veiculo: string;
  marca: string;
  modelo: string;
  placa: string;
  ano: string;
  tipo: string;
  oleo: string;
  filtro_oleo: string;
  filtro_ar: string;
  pneus: string;
  pastilhas: string;
  adicionar_veiculo: string;
  editar_veiculo: string;
  sucesso_veiculo: string;
  sucesso_excluir_veiculo: string;
  excluir_veiculo_confirmar: string;

  // DriversListView
  motoristas_cadastrados: string;
  novo_motorista: string;
  nome: string;
  telefone: string;
  cnh: string;
  categoria: string;
  sucesso_motorista: string;
  sucesso_excluir_motorista: string;
  excluir_motorista_confirmar: string;

  // TravelsView
  filtro_todos: string;
  filtro_veiculos: string;
  filtro_motoristas: string;
  filtro_status: string;
  faturamento: string;
  orcado: string;
  nova_viagem_modal_title: string;
  valor_faturamento: string;
  valor_orcamento: string;
  data_viagem: string;
  status_viagem: string;
  criar_viagem_btn: string;
  sucesso_travel: string;

  // GestaoComercialView
  faturamento_gerado: string;
  total_orcado: string;
  conversao_orcamentos: string;
  metas_faturamento: string;
  faturamento_vs_meta: string;
  progresso_meta: string;
  distribuicao_carteira: string;
  desempenho_executivos: string;
  total_gerado: string;
  conversao: string;
  carteira_clientes: string;
  clientes: string;

  // ReportsView
  total_faturamento: string;
  media_faturamento: string;
  taxa_conversao_comercial: string;
  atendimento_metas: string;
  analise_faturamento_cliente: string;
  participacao: string;
  gerado: string;
  historico_viagens: string;

  // SettingsView
  titulo_config: string;
  banco_dados: string;
  aviso_limpar: string;
  button_limpar: string;
  sobre_sistema: string;
  descricao_sistema: string;
  contato: string;
  versao: string;

  // LoginView
  login_welcome_back: string;
  login_access_account: string;
  login_email_label: string;
  login_password_label: string;
  login_forgot_password: string;
  login_remember_me: string;
  login_enter_btn: string;
  login_authenticating: string;
  login_no_account: string;
  login_request_access: string;
  login_total_control: string;
  login_hero_description: string;
  login_realtime_reports: string;
  login_bank_security: string;
  login_privacy: string;
  login_invalid_credentials: string;
  login_choose_email_warning: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  pt: {
    dashboard: 'Dashboard',
    clients: 'Gravar Clientes',
    vehicles: 'Veículos',
    drivers: 'Motoristas',
    travels: 'Agenda de viagens',
    commercial: 'Gestão Comercial',
    reports: 'Relatórios',
    settings: 'Configurações',
    logged_as: 'Logado como',
    logout: 'Sair',

    search_placeholder: 'Pesquisar informações no CRM...',
    theme_selector: 'Mudar Tema',
    gravar_clientes_btn: 'Gravar Clientes',
    orcamento_btn: 'Orçamento',
    nova_viagem_btn: 'Nova Viagem',
    adicionar_veiculo_btn: 'Adicionar Veículo',
    cadastrar_motorista_btn: 'Cadastrar Motorista',
    exportar_pdf_btn: 'Exportar PDF',
    day: 'Dia',
    week: 'Semana',
    month: 'Mês',
    year: 'Ano',

    valor_gerado: 'Valor Generated',
    valor_orcado: 'Valor Orçado',
    frota_ativa: 'Frota Ativa',
    motoristas_prontos: 'Motoristas Prontos',
    viagens_realizadas: 'Viagens Realizadas',
    alertas_manutencao: 'Alertas Manut.',
    desempenho_mensal: 'Desempenho de Faturamento Mensal (Janeiro 2026)',
    meta_mensal: 'Meta Mensal',
    executivo_conta: 'Executivo de Conta',
    viagens_recentes: 'Viagens Recentes',
    ver_agenda_completa: 'Ver Agenda Completa',
    no_travels: 'Nenhuma viagem recente registrada.',
    remover_viagem: 'Deseja realmente remover esta viagem?',

    tabela_id: 'ID',
    tabela_data: 'Data',
    tabela_cliente: 'Cliente',
    tabela_veiculo: 'Veículo',
    tabela_motorista: 'Motorista',
    tabela_status: 'Status',
    tabela_valor: 'Valor',

    status_completo: 'Completo',
    status_em_viagem: 'Em Viagem',
    status_agendado: 'Agendado',
    status_disponivel: 'Disponível',
    status_folga: 'Folga',
    status_manutencao: 'Manutenção',

    clientes_cadastrados: 'Clientes Cadastrados',
    novo_cliente: 'Novo Cliente',
    nome_fantasia: 'Nome Fantasia',
    razao_social: 'Razão Social',
    cnpj: 'CNPJ',
    cidade: 'Cidade',
    uf: 'UF',
    executivo: 'Executivo',
    acoes: 'Ações',
    salvar: 'Salvar',
    cancelar: 'Cancelar',
    editar_cliente: 'Editar Cliente',
    adicionar_cliente: 'Adicionar Cliente',
    sucesso_salvar: 'Cliente gravado com sucesso!',
    sucesso_excluir: 'Cliente excluído com sucesso!',
    excluir_confirmar: 'Deseja realmente excluir este cliente?',

    veiculos_cadastrados: 'Veículos Cadastrados',
    novo_veiculo: 'Novo Veículo',
    marca: 'Marca',
    modelo: 'Modelo',
    placa: 'Placa',
    ano: 'Ano',
    tipo: 'Tipo',
    oleo: 'Óleo',
    filtro_oleo: 'Filtro Óleo',
    filtro_ar: 'Filtro Ar',
    pneus: 'Pneus',
    pastilhas: 'Pastilhas de Freio',
    adicionar_veiculo: 'Cadastrar Veículo',
    editar_veiculo: 'Editar Veículo',
    sucesso_veiculo: 'Veículo gravado com sucesso!',
    sucesso_excluir_veiculo: 'Veículo excluído com sucesso!',
    excluir_veiculo_confirmar: 'Deseja realmente excluir este veículo?',

    motoristas_cadastrados: 'Motoristas Cadastrados',
    novo_motorista: 'Novo Motorista',
    nome: 'Nome',
    telefone: 'Telefone',
    cnh: 'CNH',
    categoria: 'Categoria',
    sucesso_motorista: 'Motorista gravado com sucesso!',
    sucesso_excluir_motorista: 'Motorista excluído com sucesso!',
    excluir_motorista_confirmar: 'Deseja realmente excluir este motorista?',

    filtro_todos: 'Todos os Clientes',
    filtro_veiculos: 'Todos os Veículos',
    filtro_motoristas: 'Todos os Motoristas',
    filtro_status: 'Todos os Status',
    faturamento: 'Faturamento',
    orcado: 'Orçado',
    nova_viagem_modal_title: 'Nova Viagem',
    valor_faturamento: 'Valor do Faturamento',
    valor_orcamento: 'Valor do Orçamento',
    data_viagem: 'Data da Viagem',
    status_viagem: 'Status da Viagem',
    criar_viagem_btn: 'Agendar Viagem',
    sucesso_travel: 'Viagem agendada com sucesso!',

    faturamento_gerado: 'Faturamento Gerado',
    total_orcado: 'Total Orçado',
    conversao_orcamentos: 'Conversão de Orçamentos',
    metas_faturamento: 'Metas de Faturamento',
    faturamento_vs_meta: 'Faturamento vs. Meta Mensal',
    progresso_meta: 'Progresso da Meta',
    distribuicao_carteira: 'Distribuição de Clientes por Executivo',
    desempenho_executivos: 'Desempenho dos Executivos de Contas (Janeiro 2026)',
    total_gerado: 'Total Gerado',
    conversao: 'Conversão',
    carteira_clientes: 'Carteira de Clientes',
    clientes: 'clientes',

    total_faturamento: 'Total de Faturamento Gerado',
    media_faturamento: 'Média de Faturamento por Cliente',
    taxa_conversao_comercial: 'Taxa de Conversão Comercial',
    atendimento_metas: 'Atendimento de Metas',
    analise_faturamento_cliente: 'Análise de Faturamento por Cliente',
    participacao: 'Participação',
    gerado: 'Gerado',
    historico_viagens: 'Histórico Detalhado de Viagens de Janeiro 2026',

    titulo_config: 'Configurações do Sistema',
    banco_dados: 'Limpeza de Dados',
    aviso_limpar: 'Atenção: Ação irreversível! Limpar os dados locais apagará todos os clientes, veículos, motoristas e viagens inseridos no sistema.',
    button_limpar: 'Limpar Todos os Dados',
    sobre_sistema: 'Sobre o Eixo CRM',
    descricao_sistema: 'O Eixo CRM Smart é uma plataforma de controle inteligente de transporte de cargas e gestão comercial desenvolvido para frotas e transportadoras modernas.',
    contato: 'Suporte & Ajuda',
    versao: 'Versão',

    login_welcome_back: 'Bem-vindo de volta',
    login_access_account: 'Acesse sua conta para gerenciar sua frota.',
    login_email_label: 'E-mail',
    login_password_label: 'Senha',
    login_forgot_password: 'Esqueceu a senha?',
    login_remember_me: 'Lembrar de mim',
    login_enter_btn: 'Entrar',
    login_authenticating: 'Autenticando...',
    login_no_account: 'Não tem uma conta?',
    login_request_access: 'Solicite acesso à plataforma',
    login_total_control: 'Controle total da sua logística.',
    login_hero_description: 'Gerencie frotas, motoristas e finanças em uma plataforma integrada e inteligente projetada para alta performance.',
    login_realtime_reports: 'Relatórios em Tempo Real',
    login_bank_security: 'Segurança Bancária',
    login_privacy: 'Privacidade',
    login_invalid_credentials: 'Credenciais inválidas. Tente novamente.',
    login_choose_email_warning: 'Por favor, informe seu e-mail.',
  },
  en: {
    dashboard: 'Dashboard',
    clients: 'Register Clients',
    vehicles: 'Vehicles',
    drivers: 'Drivers',
    travels: 'Travel Schedule',
    commercial: 'Commercial Management',
    reports: 'Reports',
    settings: 'Settings',
    logged_as: 'Logged in as',
    logout: 'Logout',

    search_placeholder: 'Search information in CRM...',
    theme_selector: 'Toggle Theme',
    gravar_clientes_btn: 'Register Clients',
    orcamento_btn: 'Budget',
    nova_viagem_btn: 'New Travel',
    adicionar_veiculo_btn: 'Add Vehicle',
    cadastrar_motorista_btn: 'Register Driver',
    exportar_pdf_btn: 'Export PDF',
    day: 'Day',
    week: 'Week',
    month: 'Month',
    year: 'Year',

    valor_gerado: 'Value Generated',
    valor_orcado: 'Value Budgeted',
    frota_ativa: 'Active Fleet',
    motoristas_prontos: 'Ready Drivers',
    viagens_realizadas: 'Trips Completed',
    alertas_manutencao: 'Maint. Alerts',
    desempenho_mensal: 'Monthly Billing Performance (January 2026)',
    meta_mensal: 'Monthly Goal',
    executivo_conta: 'Account Executive',
    viagens_recentes: 'Recent Travels',
    ver_agenda_completa: 'View Full Calendar',
    no_travels: 'No recent travels registered.',
    remover_viagem: 'Are you sure you want to delete this trip?',

    tabela_id: 'ID',
    tabela_data: 'Date',
    tabela_cliente: 'Client',
    tabela_veiculo: 'Vehicle',
    tabela_motorista: 'Driver',
    tabela_status: 'Status',
    tabela_valor: 'Value',

    status_completo: 'Completed',
    status_em_viagem: 'In Transit',
    status_agendado: 'Scheduled',
    status_disponivel: 'Available',
    status_folga: 'Off Duty',
    status_manutencao: 'Maintenance',

    clientes_cadastrados: 'Registered Clients',
    novo_cliente: 'New Client',
    nome_fantasia: 'Trade Name',
    razao_social: 'Corporate Name',
    cnpj: 'CNPJ / Tax ID',
    cidade: 'City',
    uf: 'State / Prov',
    executivo: 'Executive',
    acoes: 'Actions',
    salvar: 'Save',
    cancelar: 'Cancel',
    editar_cliente: 'Edit Client',
    adicionar_cliente: 'Add Client',
    sucesso_salvar: 'Client saved successfully!',
    sucesso_excluir: 'Client deleted successfully!',
    excluir_confirmar: 'Are you sure you want to delete this client?',

    veiculos_cadastrados: 'Registered Vehicles',
    novo_veiculo: 'New Vehicle',
    marca: 'Brand',
    modelo: 'Model',
    placa: 'License Plate',
    ano: 'Year',
    tipo: 'Type',
    oleo: 'Oil',
    filtro_oleo: 'Oil Filter',
    filtro_ar: 'Air Filter',
    pneus: 'Tires',
    pastilhas: 'Brake Pads',
    adicionar_veiculo: 'Register Vehicle',
    editar_veiculo: 'Edit Vehicle',
    sucesso_veiculo: 'Vehicle saved successfully!',
    sucesso_excluir_veiculo: 'Vehicle deleted successfully!',
    excluir_veiculo_confirmar: 'Are you sure you want to delete this vehicle?',

    motoristas_cadastrados: 'Registered Drivers',
    novo_motorista: 'New Driver',
    nome: 'Name',
    telefone: 'Phone',
    cnh: 'Driver License (CNH)',
    categoria: 'Category',
    sucesso_motorista: 'Driver saved successfully!',
    sucesso_excluir_motorista: 'Driver deleted successfully!',
    excluir_motorista_confirmar: 'Are you sure you want to delete this driver?',

    filtro_todos: 'All Clients',
    filtro_veiculos: 'All Vehicles',
    filtro_motoristas: 'All Drivers',
    filtro_status: 'All Statuses',
    faturamento: 'Billing',
    orcado: 'Budgeted',
    nova_viagem_modal_title: 'New Travel',
    valor_faturamento: 'Billing Value',
    valor_orcamento: 'Budget Value',
    data_viagem: 'Travel Date',
    status_viagem: 'Travel Status',
    criar_viagem_btn: 'Schedule Trip',
    sucesso_travel: 'Trip scheduled successfully!',

    faturamento_gerado: 'Billing Generated',
    total_orcado: 'Total Budgeted',
    conversao_orcamentos: 'Budget Conversion',
    metas_faturamento: 'Billing Goals',
    faturamento_vs_meta: 'Billing vs. Monthly Goal',
    progresso_meta: 'Goal Progress',
    distribuicao_carteira: 'Client Distribution by Executive',
    desempenho_executivos: 'Account Executives Performance (January 2026)',
    total_gerado: 'Total Generated',
    conversao: 'Conversion',
    carteira_clientes: 'Client Portfolio',
    clientes: 'clients',

    total_faturamento: 'Total Billing Generated',
    media_faturamento: 'Average Billing per Client',
    taxa_conversao_comercial: 'Commercial Conversion Rate',
    atendimento_metas: 'Goal Attainment',
    analise_faturamento_cliente: 'Billing Analysis by Client',
    participacao: 'Share',
    gerado: 'Generated',
    historico_viagens: 'Detailed January 2026 Travel History',

    titulo_config: 'System Settings',
    banco_dados: 'Data Cleanup',
    aviso_limpar: 'Attention: Irreversible action! Clearing local data will delete all clients, vehicles, drivers, and scheduled trips in the system.',
    button_limpar: 'Clean All Data',
    sobre_sistema: 'About Eixo CRM',
    descricao_sistema: 'Eixo CRM Smart is an intelligent cargo transport tracking and commercial management platform developed for modern fleets and logistics companies.',
    contato: 'Support & Help',
    versao: 'Version',

    login_welcome_back: 'Welcome back',
    login_access_account: 'Access your account to manage your fleet.',
    login_email_label: 'Email address',
    login_password_label: 'Password',
    login_forgot_password: 'Forgot password?',
    login_remember_me: 'Remember me',
    login_enter_btn: 'Sign in',
    login_authenticating: 'Authenticating...',
    login_no_account: 'Do not have an account?',
    login_request_access: 'Request platform access',
    login_total_control: 'Complete control of your logistics.',
    login_hero_description: 'Manage fleets, drivers, and finances in an integrated, smart platform designed for high performance.',
    login_realtime_reports: 'Real-time Reports',
    login_bank_security: 'Bank-grade Security',
    login_privacy: 'Privacy Policy',
    login_invalid_credentials: 'Invalid credentials. Please try again.',
    login_choose_email_warning: 'Please specify your email.',
  },
  es: {
    dashboard: 'Tablero',
    clients: 'Registrar Clientes',
    vehicles: 'Vehículos',
    drivers: 'Conductores',
    travels: 'Agenda de Viajes',
    commercial: 'Gestión Comercial',
    reports: 'Informes',
    settings: 'Configuraciones',
    logged_as: 'Iniciado como',
    logout: 'Salir',

    search_placeholder: 'Buscar información en el CRM...',
    theme_selector: 'Cambiar Tema',
    gravar_clientes_btn: 'Registrar Clientes',
    orcamento_btn: 'Presupuesto',
    nova_viagem_btn: 'Nuevo Viaje',
    adicionar_veiculo_btn: 'Añadir Vehículo',
    cadastrar_motorista_btn: 'Registrar Conductor',
    exportar_pdf_btn: 'Exportar PDF',
    day: 'Día',
    week: 'Semana',
    month: 'Mes',
    year: 'Año',

    valor_gerado: 'Valor Generado',
    valor_orcado: 'Valor Presupuestado',
    frota_ativa: 'Flota Activa',
    motoristas_prontos: 'Conductores Listos',
    viagens_realizadas: 'Viajes Realizados',
    alertas_manutencao: 'Alertas Manten.',
    desempenho_mensal: 'Rendimiento de Facturación Mensual (Enero 2026)',
    meta_mensal: 'Meta Mensal',
    executivo_conta: 'Ejecutivo de Cuenta',
    viagens_recentes: 'Viajes Recientes',
    ver_agenda_completa: 'Ver Agenda Completa',
    no_travels: 'No hay viajes recientes registrados.',
    remover_viagem: '¿Realmente deseja eliminar este viaje?',

    tabela_id: 'ID',
    tabela_data: 'Fecha',
    tabela_cliente: 'Cliente',
    tabela_veiculo: 'Vehículo',
    tabela_motorista: 'Conductor',
    tabela_status: 'Estado',
    tabela_valor: 'Valor',

    status_completo: 'Completo',
    status_em_viagem: 'En Viaje',
    status_agendado: 'Programado',
    status_disponivel: 'Disponible',
    status_folga: 'De Descanso',
    status_manutencao: 'Mantenimiento',

    clientes_cadastrados: 'Clientes Registrados',
    novo_cliente: 'Nuevo Cliente',
    nome_fantasia: 'Nombre Comercial',
    razao_social: 'Razón Social',
    cnpj: 'CNPJ / Id Fiscal',
    cidade: 'Ciudad',
    uf: 'Provincia',
    executivo: 'Ejecutivo',
    acoes: 'Acciones',
    salvar: 'Guardar',
    cancelar: 'Cancelar',
    editar_cliente: 'Editar Cliente',
    adicionar_cliente: 'Añadir Cliente',
    sucesso_salvar: '¡Cliente guardado con éxito!',
    sucesso_excluir: '¡Cliente eliminado con éxito!',
    excluir_confirmar: '¿Realmente desea eliminar este cliente?',

    veiculos_cadastrados: 'Vehículos Registrados',
    novo_veiculo: 'Nuevo Vehículo',
    marca: 'Marca',
    modelo: 'Modelo',
    placa: 'Matrícula',
    ano: 'Año',
    tipo: 'Tipo',
    oleo: 'Aceite',
    filtro_oleo: 'Filtro de Aceite',
    filtro_ar: 'Filtro de Aire',
    pneus: 'Neumáticos',
    pastilhas: 'Pastillas de Freno',
    adicionar_veiculo: 'Registrar Vehículo',
    editar_veiculo: 'Editar Vehículo',
    sucesso_veiculo: '¡Vehículo guardado con éxito!',
    sucesso_excluir_veiculo: '¡Vehículo eliminado con éxito!',
    excluir_veiculo_confirmar: '¿Realmente desea eliminar este vehículo?',

    motoristas_cadastrados: 'Conductores Registrados',
    novo_motorista: 'Nuevo Conductor',
    nome: 'Nombre',
    telefone: 'Teléfono',
    cnh: 'Licencia (CNH)',
    categoria: 'Categoría',
    sucesso_motorista: '¡Conductor guardado con éxito!',
    sucesso_excluir_motorista: '¡Conductor eliminado con éxito!',
    excluir_motorista_confirmar: '¿Realmente desea eliminar este conductor?',

    filtro_todos: 'Todos los Clientes',
    filtro_veiculos: 'Todos los Vehículos',
    filtro_motoristas: 'Todos los Conductores',
    filtro_status: 'Todos os Status',
    faturamento: 'Facturación',
    orcado: 'Presupuestado',
    nova_viagem_modal_title: 'Nuevo Viaje',
    valor_faturamento: 'Valor de Facturación',
    valor_orcamento: 'Valor Estimado',
    data_viagem: 'Fecha de Viaje',
    status_viagem: 'Estado del Viaje',
    criar_viagem_btn: 'Programar Viaje',
    sucesso_travel: '¡Viaje programado con éxito!',

    faturamento_gerado: 'Facturación Generada',
    total_orcado: 'Total Presupuestado',
    conversao_orcamentos: 'Conversión de Presupuestos',
    metas_faturamento: 'Metas de Facturación',
    faturamento_vs_meta: 'Facturación vs. Meta Mensal',
    progresso_meta: 'Progreso de la Meta',
    distribuicao_carteira: 'Distribución de Clientes por Ejecutivo',
    desempenho_executivos: 'Rendimiento de Ejecutivos de Cuentas (Enero 2026)',
    total_gerado: 'Total Generado',
    conversao: 'Conversión',
    carteira_clientes: 'Cartera de Clientes',
    clientes: 'clientes',

    total_faturamento: 'Total de Facturación Generada',
    media_faturamento: 'Promedio de Facturación por Cliente',
    taxa_conversao_comercial: 'Tasa de Conversión Comercial',
    atendimento_metas: 'Logro de Metas',
    analise_faturamento_cliente: 'Análisis de Facturación por Cliente',
    participacao: 'Participación',
    gerado: 'Generado',
    historico_viagens: 'Historial Detallado de Viajes de Enero 2026',

    titulo_config: 'Configurações do Sistema',
    banco_dados: 'Limpieza de Datos',
    aviso_limpar: 'Atención: ¡Acción irreversible! Limpiar los datos locales eliminará todos los clientes, vehículos, conductores y viajes programados.',
    button_limpar: 'Limpar Todos os Dados',
    sobre_sistema: 'Acerca de Eixo CRM',
    descricao_sistema: 'Eixo CRM Smart es una plataforma inteligente de seguimiento de transporte de mercancías y gestión comercial diseñada para flotas y empresas de transporte modernas.',
    contato: 'Soporte y Ayuda',
    versao: 'Versión',

    login_welcome_back: 'Bienvenido de vuelta',
    login_access_account: 'Acceda a su cuenta para administrar su flota.',
    login_email_label: 'Correo electrónico',
    login_password_label: 'Contraseña',
    login_forgot_password: '¿Olvidó la contraseña?',
    login_remember_me: 'Recordarme',
    login_enter_btn: 'Iniciar sesión',
    login_authenticating: 'Autenticando...',
    login_no_account: '¿No tiene una cuenta?',
    login_request_access: 'Solicite acceso a la plataforma',
    login_total_control: 'Control total de su logística.',
    login_hero_description: 'Gestione flotas, conductores y finanzas en una plataforma integrada e inteligente diseñada para el alto rendimiento.',
    login_realtime_reports: 'Informes en Tiempo Real',
    login_bank_security: 'Seguridad Bancaria',
    login_privacy: 'Privacidad',
    login_invalid_credentials: 'Credenciales inválidas. Inténtelo de nuevo.',
    login_choose_email_warning: 'Por favor, introduzca su correo electrónico.',
  },
  fr: {
    dashboard: 'Tableau de bord',
    clients: 'Enregistrer clients',
    vehicles: 'Véhicules',
    drivers: 'Chauffeurs',
    travels: 'Planning des trajets',
    commercial: 'Gestion commerciale',
    reports: 'Rapports',
    settings: 'Configurations',
    logged_as: 'Connecté en tant que',
    logout: 'Se déconnecter',

    search_placeholder: 'Rechercher des informations dans le CRM...',
    theme_selector: 'Changer de thème',
    gravar_clientes_btn: 'Enregistrer le client',
    orcamento_btn: 'Devis',
    nova_viagem_btn: 'Nouveau voyage',
    adicionar_veiculo_btn: 'Ajouter un véhicule',
    cadastrar_motorista_btn: 'Enregistrer un chauffeur',
    exportar_pdf_btn: 'Exporter en PDF',
    day: 'Jour',
    week: 'Semaine',
    month: 'Mois',
    year: 'Année',

    valor_gerado: 'Valeur générée',
    valor_orcado: 'Valeur estimée',
    frota_ativa: 'Flotte active',
    motoristas_prontos: 'Chauffeurs prêts',
    viagens_realizadas: 'Voyages terminés',
    alertas_manutencao: 'Alertes maint.',
    desempenho_mensal: 'Performance de facturation mensuelle (Janvier 2026)',
    meta_mensal: 'Objectif mensuel',
    executivo_conta: 'Responsable de compte',
    viagens_recentes: 'Voyages récents',
    ver_agenda_completa: 'Voir le calendrier complet',
    no_travels: 'Aucun voyage récent enregistré.',
    remover_viagem: 'Voulez-vous vraiment supprimer ce voyage?',

    tabela_id: 'ID',
    tabela_data: 'Date',
    tabela_cliente: 'Client',
    tabela_veiculo: 'Véhicule',
    tabela_motorista: 'Chauffeur',
    tabela_status: 'Statut',
    tabela_valor: 'Valeur',

    status_completo: 'Complété',
    status_em_viagem: 'En transit',
    status_agendado: 'Planifié',
    status_disponivel: 'Disponible',
    status_folga: 'En congé',
    status_manutencao: 'Maintenance',

    clientes_cadastrados: 'Clients enregistrés',
    novo_cliente: 'Nouveau client',
    nome_fantasia: 'Nom commercial',
    razao_social: 'Raison sociale',
    cnpj: 'CNPJ / ID Fiscal',
    cidade: 'Ville',
    uf: 'État / Prov.',
    executivo: 'Exécutif',
    acoes: 'Actions',
    salvar: 'Enregistrer',
    cancelar: 'Annuler',
    editar_cliente: 'Modifier le client',
    adicionar_cliente: 'Ajouter un client',
    sucesso_salvar: 'Client enregistré avec succès !',
    sucesso_excluir: 'Client supprimé avec succès !',
    excluir_confirmar: 'Voulez-vous vraiment supprimer ce client ?',

    veiculos_cadastrados: 'Véhicules enregistrés',
    novo_veiculo: 'Nouveau véhicule',
    marca: 'Marque',
    modelo: 'Modèle',
    placa: 'Plaque d\'immatriculation',
    ano: 'Année',
    tipo: 'Type',
    oleo: 'Huile',
    filtro_oleo: 'Filtre à huile',
    filtro_ar: 'Filtre à air',
    pneus: 'Pneus',
    pastilhas: 'Plaquettes de frein',
    adicionar_veiculo: 'Enregistrer le véhicule',
    editar_veiculo: 'Modifier le véhicule',
    sucesso_veiculo: 'Véhicule enregistré avec succès !',
    sucesso_excluir_veiculo: 'Véhicule supprimé avec succès !',
    excluir_veiculo_confirmar: 'Voulez-vous vraiment supprimer ce véhicule ?',

    motoristas_cadastrados: 'Chauffeurs enregistrés',
    novo_motorista: 'Nouveau chauffeur',
    nome: 'Nom',
    telefone: 'Téléphone',
    cnh: 'Permis de conduire (CNH)',
    categoria: 'Catégorie',
    sucesso_motorista: 'Chauffeur enregistré avec succès !',
    sucesso_excluir_motorista: 'Chauffeur supprimé avec succès !',
    excluir_motorista_confirmar: 'Voulez-vous vraiment supprimer ce chauffeur ?',

    filtro_todos: 'Tous les clients',
    filtro_veiculos: 'Tous les véhicules',
    filtro_motoristas: 'Tous les chauffeurs',
    filtro_status: 'Tous les statuts',
    faturamento: 'Facturation',
    orcado: 'Estimé',
    nova_viagem_modal_title: 'Nouveau voyage',
    valor_faturamento: 'Valeur de facturation',
    valor_orcamento: 'Valeur estimée',
    data_viagem: 'Date du voyage',
    status_viagem: 'Statut du voyage',
    criar_viagem_btn: 'Planifier le voyage',
    sucesso_travel: 'Voyage planifié avec succès !',

    faturamento_gerado: 'Facturation générée',
    total_orcado: 'Total estimé',
    conversao_orcamentos: 'Conversion des devis',
    metas_faturamento: 'Objectifs de facturation',
    faturamento_vs_meta: 'Facturation vs Objectif mensuel',
    progresso_meta: 'Progression de l\'objectif',
    distribuicao_carteira: 'Distribution des clients par exécutif',
    desempenho_executivos: 'Performance des responsables de comptes (Janvier 2026)',
    total_gerado: 'Total généré',
    conversao: 'Conversion',
    carteira_clientes: 'Portefeuille clients',
    clientes: 'clients',

    total_faturamento: 'Total de la facturation générée',
    media_faturamento: 'Moyenne de facturation par client',
    taxa_conversao_comercial: 'Taux de conversion commerciale',
    atendimento_metas: 'Atteinte des objectifs',
    analise_faturamento_cliente: 'Analyse de facturation par client',
    participacao: 'Part de marché',
    gerado: 'Généré',
    historico_viagens: 'Historique détaillé des voyages en Janvier 2026',

    titulo_config: 'Paramètres du système',
    banco_dados: 'Nettoyage des données',
    aviso_limpar: 'Attention : Action irréversible ! Le nettoyage des données locales supprimera tous les clients, véhicules, chauffeurs et voyages planifiés du système.',
    button_limpar: 'Nettoyer toutes les données',
    sobre_sistema: 'À propos de Eixo CRM',
    descricao_sistema: 'Eixo CRM Smart est une plateforme de suivi de transport de fret intelligente et de gestion commerciale développée pour les flottes et sociétés de transport modernes.',
    contato: 'Support & Aide',
    versao: 'Version',

    login_welcome_back: 'Bon retour parmi nous',
    login_access_account: 'Accédez à votre compte pour gérer votre flotte.',
    login_email_label: 'E-mail',
    login_password_label: 'Mot de passe',
    login_forgot_password: 'Mot de passe oublié ?',
    login_remember_me: 'Se souvenir de moi',
    login_enter_btn: 'Se connecter',
    login_authenticating: 'Authentification...',
    login_no_account: 'Vous n\'avez pas de compte ?',
    login_request_access: 'Demander l\'accès à la plateforme',
    login_total_control: 'Controle total de votre logistique.',
    login_hero_description: 'Gérez vos flottes, vos chauffeurs et vos finances dans une plateforme intégrée et intelligente conçue pour la haute performance.',
    login_realtime_reports: 'Rapports en temps réel',
    login_bank_security: 'Sécurité de niveau bancaire',
    login_privacy: 'Confidentialité',
    login_invalid_credentials: 'Identifiants invalides. Veuillez réessayer.',
    login_choose_email_warning: 'Veuillez renseigner votre e-mail.',
  },
  de: {
    dashboard: 'Dashboard',
    clients: 'Kunden registrieren',
    vehicles: 'Fahrzeuge',
    drivers: 'Fahrer',
    travels: 'Reiseplan',
    commercial: 'Vertriebsleitung',
    reports: 'Berichte',
    settings: 'Einstellungen',
    logged_as: 'Angemeldet als',
    logout: 'Abmelden',

    search_placeholder: 'Informationen im CRM suchen...',
    theme_selector: 'Thema wechseln',
    gravar_clientes_btn: 'Kunden speichern',
    orcamento_btn: 'Angebot',
    nova_viagem_btn: 'Neue Reise',
    adicionar_veiculo_btn: 'Fahrzeug hinzufügen',
    cadastrar_motorista_btn: 'Fahrer registrieren',
    exportar_pdf_btn: 'PDF exportieren',
    day: 'Tag',
    week: 'Woche',
    month: 'Monat',
    year: 'Jahr',

    valor_gerado: 'Generierter Wert',
    valor_orcado: 'Budgetierter Wert',
    frota_ativa: 'Aktive Flotte',
    motoristas_prontos: 'Bereite Fahrer',
    viagens_realizadas: 'Abgeschlossene Reisen',
    alertas_manutencao: 'Wartungsmeld.',
    desempenho_mensal: 'Monatliche Abrechnungsleistung (Januar 2026)',
    meta_mensal: 'Monatsziel',
    executivo_conta: 'Kundenbetreuer',
    viagens_recentes: 'Aktuelle Reisen',
    ver_agenda_completa: 'Vollständigen Kalender anzeigen',
    no_travels: 'Keine aktuellen Reisen registriert.',
    remover_viagem: 'Möchten Sie diese Reise wirklich löschen?',

    tabela_id: 'ID',
    tabela_data: 'Datum',
    tabela_cliente: 'Kunde',
    tabela_veiculo: 'Fahrzeug',
    tabela_motorista: 'Fahrer',
    tabela_status: 'Status',
    tabela_valor: 'Wert',

    status_completo: 'Abgeschlossen',
    status_em_viagem: 'Unterwegs',
    status_agendado: 'Geplant',
    status_disponivel: 'Verfügbar',
    status_folga: 'Auszeit',
    status_manutencao: 'Wartung',

    clientes_cadastrados: 'Registrierte Kunden',
    novo_cliente: 'Neuer Kunde',
    nome_fantasia: 'Handelsname',
    razao_social: 'Firmenname',
    cnpj: 'CNPJ / USt-IdNr.',
    cidade: 'Stadt',
    uf: 'Bundesland',
    executivo: 'Manager',
    acoes: 'Aktionen',
    salvar: 'Speichern',
    cancelar: 'Abbrechen',
    editar_cliente: 'Kunde bearbeiten',
    adicionar_cliente: 'Kunde hinzufügen',
    sucesso_salvar: 'Kunde erfolgreich gespeichert!',
    sucesso_excluir: 'Kunde erfolgreich gelöscht!',
    excluir_confirmar: 'Möchten Sie diesen Kunden wirklich löschen?',

    veiculos_cadastrados: 'Registrierte Fahrzeuge',
    novo_veiculo: 'Neues Fahrzeug',
    marca: 'Marke',
    modelo: 'Modell',
    placa: 'Kennzeichen',
    ano: 'Jahr',
    tipo: 'Typ',
    oleo: 'Öl',
    filtro_oleo: 'Ölfilter',
    filtro_ar: 'Luftfilter',
    pneus: 'Reifen',
    pastilhas: 'Bremsbeläge',
    adicionar_veiculo: 'Fahrzeug registrieren',
    editar_veiculo: 'Fahrzeug bearbeiten',
    sucesso_veiculo: 'Fahrzeug erfolgreich gespeichert!',
    sucesso_excluir_veiculo: 'Fahrzeug erfolgreich gelöscht!',
    excluir_veiculo_confirmar: 'Möchten Sie dieses Fahrzeug wirklich löschen?',

    motoristas_cadastrados: 'Registrierte Fahrer',
    novo_motorista: 'Neuer Fahrer',
    nome: 'Name',
    telefone: 'Telefon',
    cnh: 'Führerschein (CNH)',
    categoria: 'Kategorie',
    sucesso_motorista: 'Fahrer erfolgreich gespeichert!',
    sucesso_excluir_motorista: 'Fahrer erfolgreich gelöscht!',
    excluir_motorista_confirmar: 'Möchten Sie diesen Fahrer wirklich löschen?',

    filtro_todos: 'Alle Kunden',
    filtro_veiculos: 'Alle Fahrzeuge',
    filtro_motoristas: 'Alle Fahrer',
    filtro_status: 'Alle Status',
    faturamento: 'Umsatz',
    orcado: 'Budgetiert',
    nova_viagem_modal_title: 'Neue Reise',
    valor_faturamento: 'Rechnungswert',
    valor_orcamento: 'Budgetwert',
    data_viagem: 'Reisedatum',
    status_viagem: 'Reisestatus',
    criar_viagem_btn: 'Reise planen',
    sucesso_travel: 'Reise erfolgreich geplant!',

    faturamento_gerado: 'Generierter Umsatz',
    total_orcado: 'Total Budgetiert',
    conversao_orcamentos: 'Budgetkonvertierung',
    metas_faturamento: 'Umsatzziele',
    faturamento_vs_meta: 'Umsatz vs. Monatsziel',
    progresso_meta: 'Zielerreichung',
    distribuicao_carteira: 'Kundenverteilung nach Betreuer',
    desempenho_executivos: 'Leistung der Kundenbetreuer (Januar 2026)',
    total_gerado: 'Gesamtsumme generiert',
    conversao: 'Konvertierung',
    carteira_clientes: 'Kundenportfolio',
    clientes: 'Kunden',

    total_faturamento: 'Generierter Gesamtumsatz',
    media_faturamento: 'Durchschnittlicher Umsatz pro Kunde',
    taxa_conversao_comercial: 'Vertriebskonvertierungsrate',
    atendimento_metas: 'Zielerfüllung',
    analise_faturamento_cliente: 'Umsatzanalyse nach Kunde',
    participacao: 'Anteil',
    gerado: 'Generiert',
    historico_viagens: 'Detaillierter Reiseverlauf für Januar 2026',

    titulo_config: 'Systemeinstellungen',
    banco_dados: 'Datenbereinigung',
    aviso_limpar: 'Achtung: Unwiderrufliche Aktion! Das Bereinigen lokaler Daten löscht alle Kunden, Fahrzeuge, Fahrer und geplanten Reisen aus dem System.',
    button_limpar: 'Alle Daten löschen',
    sobre_sistema: 'Über Eixo CRM',
    descricao_sistema: 'Eixo CRM Smart ist eine intelligente Frachttransport- und Vertriebsmanagementplattform, die für moderne Flotten und Transportunternehmen entwickelt wurde.',
    contato: 'Support & Hilfe',
    versao: 'Version',

    login_welcome_back: 'Willkommen zurück',
    login_access_account: 'Melden Sie sich an, um Ihre Flotte zu verwalten.',
    login_email_label: 'E-Mail',
    login_password_label: 'Passwort',
    login_forgot_password: 'Passwort vergessen?',
    login_remember_me: 'Angemeldet bleiben',
    login_enter_btn: 'Einloggen',
    login_authenticating: 'Authentifizierung...',
    login_no_account: 'Haben Sie kein Konto?',
    login_request_access: 'Zugang zur Plattform anfordern',
    login_total_control: 'Volle Kontrolle über Ihre Logistik.',
    login_hero_description: 'Verwalten Sie Flotten, Fahrer und Finanzen auf einer integrierten und intelligenten Plattform, die für Höchstleistung entwickelt wurde.',
    login_realtime_reports: 'Echtzeit-Berichte',
    login_bank_security: 'Banksicherheit',
    login_privacy: 'Datenschutz',
    login_invalid_credentials: 'Ungültige Anmeldedaten. Bitte versuchen Sie es erneut.',
    login_choose_email_warning: 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
  },
};

export function translateFallback(key: string, lang: Language): string {
  const dictionary: Record<string, Record<string, string>> = {
    "Motoristas Ativos": { en: "Active Drivers", es: "Conductores Activos", fr: "Chauffeurs Actifs", de: "Aktive Fahrer" },
    "Em operação": { en: "In operation", es: "En operación", fr: "En opération", de: "In Betrieb" },
    "Em Folga": { en: "On Leave", es: "De Descanso", fr: "En congé", de: "Auszeit" },
    "Disponíveis hoje": { en: "Available today", es: "Disponibles hoy", fr: "Disponibles aujourd'hui", de: "Heute verfügbar" },
    "Desempenho Mensal": { en: "Monthly Performance", es: "Rendimiento Mensual", fr: "Performance Mensuelle", de: "Monatliche Leistung" },
    "Comparativo de faturamento vs. orçamento": { en: "Billing vs. budget", es: "Facturación vs. presupuesto", fr: "Facturation vs budget", de: "Umsatz vs. Budget" },
    "Faturamento": { en: "Billing", es: "Facturación", fr: "Facturation", de: "Umsatz" },
    "Orçamento": {
    en: "Quote & Budget",
    es: "Presupuesto",
    fr: "Devis",
    de: "Kostenvoranschlag"
    },
    "Próximos Passos": { en: "Next Steps", es: "Próximos Pasos", fr: "Prochaines étapes", de: "Nächste Schritte" },
    "Ações necessárias para operar o sistema:": { en: "Required actions to operate:", es: "Acciones requeridas para operar:", fr: "Actions requises :", de: "Erforderliche Schritte:" },
    "Cadastrar Veículos": { en: "Register Vehicles", es: "Registrar Vehículos", fr: "Enregistrer des véhicules", de: "Fahrzeuge registrieren" },
    "Adicione sua frota para começar o rastreio.": { en: "Add your fleet to track.", es: "Añada su flota para iniciar.", fr: "Ajoutez votre flotte.", de: "Flotte hinzufügen." },
    "Vincular Motoristas": { en: "Link Drivers", es: "Vincular Conductores", fr: "Lier des chauffeurs", de: "Fahrer verknüpfen" },
    "Gerencie quem opera cada elemento da frota.": { en: "Manage fleet drivers.", es: "Gestione los conductores.", fr: "Gerez les chauffeurs.", de: "Fahrer verknüpfen." },
    "Criar Orçamento": { en: "Create Budget", es: "Crear Presupuesto", fr: "Créer un devis", de: "Angebot erstellen" },
    "Projete seus orçamentos e ganhos de faturamentos.": { en: "Project your budgets.", es: "Proyecte presupuestos.", fr: "Projetez vos devis.", de: "Planen Sie Angebote." },
    "Ver tutoriais e presets": { en: "View tutorials & presets", es: "Ver tutoriales y presets", fr: "Tutoriels et préréglages", de: "Tutorials & Presets" },
    "Status da Frota": { en: "Fleet Status", es: "Estado de la Flota", fr: "Statut de la flotte", de: "Flottenstatus" },
    "Controle de integridade dos veículos da frota": { en: "Fleet vehicles health", es: "Control de salud de flota", fr: "État de la flotte", de: "Zustand der Fahrzeuge" },
    "Em Viagem": { en: "In Transit", es: "En viaje", fr: "En transit", de: "Unterwegs" },
    "Disponíveis": {
    en: "Available",
    es: "Disponibles",
    fr: "Disponibles",
    de: "Verfügbar"
    },
    "Em Manutenção": { en: "In Maintenance", es: "En mantenimiento", fr: "En maintenance", de: "In Wartung" },
    "Pendente": {
    en: "Pending",
    es: "Pendiente",
    fr: "En attente",
    de: "Ausstehend"
    },
    "Cancelado": {
    en: "Canceled",
    es: "Cancelado",
    fr: "Annulé",
    de: "Storniert"
    },
    "Dados Identificatórios": { en: "Identification Data", es: "Datos de Identificación", fr: "Données d'identification", de: "Identifikationsdaten" },
    "Nome do cliente / Empresa": { en: "Client / Company", es: "Cliente / Empresa", fr: "Client / Entreprise", de: "Kunde / Firma" },
    "Digite o nome completo ou razão social": { en: "Enter full name", es: "Ingrese nombre completo", fr: "Saisissez le nom complet", de: "Name eingeben" },
    "Data de Nascimento": { en: "Birth Date", es: "Fecha de Nacimiento", fr: "Date de naissance", de: "Geburtsdatum" },
    "Informações de Contato": { en: "Contact Information", es: "Contacto", fr: "Contact", de: "Kontakt" },
    "Campos obrigatórios": { en: "Required fields", es: "Campos obligatorios", fr: "Champs obligatoires", de: "Pflichtfelder" },
    "Status do Registro": { en: "Registration Status", es: "Estado del Registro", fr: "Statut", de: "Status" },
    "Nenhum cliente cadastrado.": { en: "No registered clients.", es: "Sin clientes.", fr: "Aucun client.", de: "Keine Kunden." },
    "Nome do Motorista": { en: "Driver Name", es: "Nombre de Conductor", fr: "Nom du chauffeur", de: "Fahrername" },
    "Ex Carlos Alexandre": { en: "e.g., John Doe", es: "ej. Juan Pérez", fr: "ex. Jean Dupont", de: "z.B. Max Mustermann" },
    "Telefone de Contato": { en: "Contact Phone", es: "Teléfono", fr: "Téléphone", de: "Telefon" },
    "Status Operacional Inicial": { en: "Initial Status", es: "Estado Inicial", fr: "Statut initial", de: "Anfangsstatus" },
    "Gestão de escalas operacionais": { en: "Schedules management", es: "Gestión de escalas", fr: "Gestion de planning", de: "Planungs-Management" },
    "Nome / Motorista": { en: "Name / Driver", es: "Nombre / Conductor", fr: "Nom / Chauffeur", de: "Name / Fahrer" },
    "Status Ativo": { en: "Active Status", es: "Estado Activo", fr: "Statut actif", de: "Aktiver Status" },
    "Controles Rápidos": { en: "Quick Controls", es: "Controles Rápidos", fr: "Contrôles", de: "Steuerung" },
    "Folgar": { en: "Go on Leave", es: "Dar descanso", fr: "En congé", de: "Freigeben" },
    "Em viagem (revisar na agenda)": { en: "On trip (check schedule)", es: "En viagem (ve agenda)", fr: "En voyage (voir planning)", de: "Unterwegs (Reiseplan)" },
    "Quilometragem (KM)": { en: "Mileage (KM)", es: "Kilometraje (KM)", fr: "Kilométrage (KM)", de: "Kilometerstand (KM)" },
    "Óleo do Motor": { en: "Engine Oil", es: "Aceite de Motor", fr: "Huile moteur", de: "Motoröl" },
    "Filtro de Óleo": { en: "Oil Filter", es: "Filtro de Aceite", fr: "Filtre à huile", de: "Ölfilter" },
    "Filtro de Ar": { en: "Air Filter", es: "Filtro de Aire", fr: "Filtre à air", de: "Luftfilter" },
    "Desgaste de Pneus": { en: "Tyre Wear", es: "Desgaste de Neumáticos", fr: "Usure des pneus", de: "Reifenverschleiß" },
    "Pastilhas de Freio": { en: "Brake Pads", es: "Pastillas de Freno", fr: "Plaquettes de freno", de: "Bremsbeläge" },
    "Anotações Gerais do Veículo": { en: "General Vehicle Notes", es: "Anotaciones de Vehículo", fr: "Notes du véhicule", de: "Fahrzeugnotizen" },
    "Informações Básicas": { en: "Basic Info", es: "Información Básica", fr: "Infos de base", de: "Basisinfos" },
    "Histórico de Revisão Preventiva %": { en: "Maintenance History %", es: "Historial de Mantenimiento %", fr: "Historique de maintenance", de: "Wartungsverlauf %" },
    "Saúde Geral": { en: "General Health", es: "Salud General", fr: "Santé générale", de: "Allgemeiner Zustand" },
    "Em Dia": { en: "On Track", es: "Al Día", fr: "À jour", de: "Ok" },
    "Aviso": { en: "Warning", es: "Aviso", fr: "Alerte", de: "Warnung" },
    "Pastilhas": { en: "Brake Pads", es: "Pastillas", fr: "Plaquettes", de: "Bremsen" },
    "Gravar Notas": { en: "Save Notes", es: "Guardar Notas", fr: "Enregistrer", de: "Notizen speichern" },
    "Buscar viagem, cliente...": {
    en: "Search travel, client...",
    es: "Buscar viaje, cliente...",
    fr: "Rechercher voyage, client...",
    de: "Reise, Kunde suchen..."
    },
    "Todos Veículos": {
    en: "All Vehicles",
    es: "Todos los Vehículos",
    fr: "Tous les Véhicules",
    de: "Alle Fahrzeuge"
    },
    "Todos Motoristas": {
    en: "All Drivers",
    es: "Todos los Conductores",
    fr: "Tous les Chauffeurs",
    de: "Alle Fahrer"
    },
    "Calendário de Viagens - Janeiro 2026": { en: "Travel Calendar - January 2026", es: "Calendario - Enero 2026", fr: "Calendrier - Janvier 2026", de: "Reisekalender - Januar 2026" },
    "Estabilidade Operacional": { en: "Operational Stability", es: "Estabilidad", fr: "Stabilité", de: "Stabilität" },
    "Segurança Preventiva": { en: "Preventive Safety", es: "Seguridad", fr: "Sécurité", de: "Sicherheit" },
    "Detalhes da Viagem": { en: "Travel Details", es: "Detalles", fr: "Détails", de: "Reisedetails" },
    "Origem": {
    en: "Origin",
    es: "Origen",
    fr: "Origine",
    de: "Herkunft"
    },
    "Destino": {
    en: "Destination",
    es: "Destino",
    fr: "Destination",
    de: "Ziel"
    },
    "Valor faturado": { en: "Billed value", es: "Valor facturado", fr: "Valeur facturée", de: "Umsatz" },
    "Valor orçado": { en: "Budgeted value", es: "Valor presupuestado", fr: "Valeur estimée", de: "Budgetierter Wert" },
    "Alterar Status": { en: "Change Status", es: "Cambiar Estado", fr: "Modifier le statut", de: "Status ändern" },
    "Remover Viagem": { en: "Remove Travel", es: "Eliminar viaje", fr: "Supprimer", de: "Reise entfernen" },
    "Selecione o Cliente": { en: "Select Client", es: "Seleccione Cliente", fr: "Sélectionnez le client", de: "Kunde wählen" },
    "Selecione o Veículo": { en: "Select Vehicle", es: "Seleccione Vehículo", fr: "Sélectionnez le véhicule", de: "Fahrzeug wählen" },
    "Selecione o Motorista": { en: "Select Driver", es: "Seleccione Conductor", fr: "Sélectionnez le chauffeur", de: "Fahrer wählen" },
    "Valor de Faturamento (R$)": { en: "Billing Value ($)", es: "Valor de Facturación ($)", fr: "Valeur de facturation ($)", de: "Umsatz ($)" },
    "Valor de Orçamento (R$)": { en: "Budget Value ($)", es: "Valor de Presupuesto ($)", fr: "Valeur estimée ($)", de: "Angebotssumme ($)" },
    "Cadastrar Nova Viagem": { en: "Register New Travel", es: "Registrar Nuevo Viaje", fr: "Enregistrer voyage", de: "Reise registrieren" },
    "Comparativo de Performance": {
    en: "Performance Comparison",
    es: "Comparación de Rendimiento",
    fr: "Comparaison des Performances",
    de: "Leistungsvergleich"
    },
    "Sua Distribuição de Carteira por Executivo": { en: "Portfolio Distribution", es: "Distribución de Cartera", fr: "Distribution de portefeuille", de: "Kundenverteilung" },
    "Executivo Ativo": { en: "Active Executive", es: "Ejecutivo Activo", fr: "Exécutif actif", de: "Aktiver Manager" },
    "Desempenho dos Executivos de Contas": { en: "Executives Performance", es: "Rendimiento", fr: "Performance", de: "Leistung" },
    "Executivo de Vendas": {
    en: "Sales Executive",
    es: "Ejecutivo de Ventas",
    fr: "Responsable des Ventes",
    de: "Vertriebsmitarbeiter"
    },
    "Clientes Ativos": { en: "Active Clients", es: "Clientes Activos", fr: "Clients actifs", de: "Aktive Kunden" },
    "Atingido": { en: "Achieved", es: "Alcanzado", fr: "Atteint", de: "Erreicht" },
    "Filtrar Executivo": { en: "Filter Executive", es: "Filtrar Ejecutivo", fr: "Filtrer exécutif", de: "Nach Betreuer filtern" },
    "Parâmetros de Filtragem": {
    en: "Filtering Parameters",
    es: "Parámetros de Filtración",
    fr: "Paramètres de Filtrage",
    de: "Filtereinstellungen"
    },
    "Exportar": {
    en: "Export",
    es: "Exportar",
    fr: "Exporter",
    de: "Exportieren"
    },
    "Gerar Relatório": {
    en: "Generate Report",
    es: "Generar Informe",
    fr: "Générer le Rapport",
    de: "Bericht erstellen"
    },
    "Gerando...": {
    en: "Generating...",
    es: "Generando...",
    fr: "Génération...",
    de: "Wird generiert..."
    },
    "Média por Viagem": { en: "Average per Travel", es: "Promedio", fr: "Moyenne", de: "Schnitt pro Reise" },
    "Conversão de Meta": { en: "Goal Conversion", es: "Conversión de Meta", fr: "Conversion d'objectif", de: "Zielerreichung" },
    "Distância Estimada": { en: "Estimated Distance", es: "Distancia Estimada", fr: "Distance estimée", de: "Geschätzte Entfernung" },
    "Eficiência Comercial": { en: "Commercial Efficiency", es: "Eficiencia", fr: "Efficacité", de: "Vertriebseffizienz" },
    "Participação (%)": { en: "Share (%)", es: "Participación (%)", fr: "Part (%)", de: "Anteil (%)" },
    "Histórico Geral Detalhado": { en: "Detailed History", es: "Historial Detallado", fr: "Historique", de: "Verlauf" },
    "Objetivos Corporativos": {
    en: "Corporate Objectives",
    es: "Objetivos Corporativos",
    fr: "Objectifs de l'Entreprise",
    de: "Unternehmensziele"
    },
    "Fuso Horário do Sistema": {
    en: "System Timezone",
    es: "Zona Horaria del Sistema",
    fr: "Fuseau Horaire du Système",
    de: "System-Zeitzone"
    },
    "Manual e Integrações": {
    en: "Manual & Integrations",
    es: "Manual e Integraciones",
    fr: "Manuel & Intégrations",
    de: "Handbuch & Integrationen"
    },
    "Ações de Administrador": { en: "Administrator Actions", es: "Acciones", fr: "Actions d'administrateur", de: "Administrator-Aktionen" },
    "Gravar Veículo": {
    en: "Save Vehicle",
    es: "Guardar Vehículo",
    fr: "Enregistrer le véhicule",
    de: "Fahrzeug speichern"
    },
    "Novo Motorista": {
    en: "New Driver",
    es: "Nuevo Conductor",
    fr: "Nouveau Chauffeur",
    de: "Neuer Fahrer"
    },
    "Gravar Clientes": {
    en: "Save Clients",
    es: "Guardar Clientes",
    fr: "Enregistrer les Clients",
    de: "Kunden speichern"
    },
    "Nova Viagem": {
    en: "New Travel",
    es: "Nuevo Viaje",
    fr: "Nouveau Voyage",
    de: "Neue Reise"
    },
    "Janeiro 2026": { en: "January 2026", es: "Enero 2026", fr: "Janvier 2026", de: "Januar 2026" },
    "Dia": {
    en: "Day",
    es: "Día",
    fr: "Jour",
    de: "Tag"
    },
    "Semana": {
    en: "Week",
    es: "Semana",
    fr: "Semaine",
    de: "Woche"
    },
    "Mês": {
    en: "Month",
    es: "Mes",
    fr: "Mois",
    de: "Monat"
    },
    "Ano": {
    en: "Year",
    es: "Año",
    fr: "Année",
    de: "Jahr"
    },
    "Importar Planilha (.xls, .csv)": { en: "Import Spreadsheet", es: "Importar", fr: "Importer", de: "Importieren" },
    "Sem alteração": { en: "No change", es: "Sin cambios", fr: "Pas de changement", de: "Keine Änderung" },
    "Este mês": { en: "This month", es: "Este mes", fr: "Ce mois-ci", de: "Diesen Monat" },
    "Cadastrados": { en: "Registered", es: "Registrados", fr: "Inscrits", de: "Registriert" },
    "Cliente Geral": {
    en: "General Client",
    es: "Cliente General",
    fr: "Client Général",
    de: "Allgemeiner Kunde"
    },
    "Veículo Especial": {
    en: "Special Vehicle",
    es: "Vehículo Especial",
    fr: "Véhicule Spécial",
    de: "Spezialfahrzeug"
    },
    "Motorista Reserva": {
    en: "Backup Driver",
    es: "Conductor de Reserva",
    fr: "Chauffeur de Réserve",
    de: "Ersatzfahrer"
    },
    "Validação de preenchimento de campos obrigatórios:": {
    en: "Validation of required fields completion:",
    es: "Validación del llenado de campos obligatorios:",
    fr: "Validation des champs obligatoires :",
    de: "Validierung der Pflichtfelder:"
    },
    "Preencha os 3 campos obrigatórios marcados com asterisk (*) para habilitar o salvamento de clientes.": {
    en: "Fill in the 3 required fields marked with an asterisk (*) to enable saving clients.",
    es: "Complete los 3 campos obligatorios marcados con asterisco (*) para habilitar el guardado de clientes.",
    fr: "Remplissez les 3 champs obligatoires marqués d'un astérisque (*) pour enregistrer.",
    de: "Füllen Sie die 3 mit einem Sternchen (*) markierten Pflichtfelder aus, um Kunden zu speichern."
    },
    "Ações Rápidas": {
    en: "Quick Actions",
    es: "Acciones Rápidas",
    fr: "Actions Rapides",
    de: "Schnellaktionen"
    },
    "O recurso de importação de planilhas está configurado e pronto para uso corporativo!": {
    en: "The spreadsheet import feature is configured and ready for corporate use!",
    es: "¡La función de importación de hojas de cálculo está configurada y lista para su uso corporativo!",
    fr: "La fonctionnalité d'importation de feuilles de calcul est prête !",
    de: "Der Import von Tabellenkalkulationen ist für den Unternehmenseinsatz bereit!"
    },
    "disponível": {
    en: "Available",
    es: "Disponible",
    fr: "Disponible",
    de: "Verfügbar"
    },
    "em_viagem": {
    en: "In Transit",
    es: "En viaje",
    fr: "En transit",
    de: "Unterwegs"
    },
    "folga": {
    en: "On Leave",
    es: "De descanso",
    fr: "En congé",
    de: "Auszeit"
    },
    "Cadastrar Motorista": {
    en: "Register Driver",
    es: "Registrar Conductor",
    fr: "Enregistrer le chauffeur",
    de: "Fahrer registrieren"
    },
    "Gravar Motorista": {
    en: "Save Driver",
    es: "Guardar Conductor",
    fr: "Enregistrer",
    de: "Fahrer speichern"
    },
    "Motoristas Cadastrados": {
    en: "Registered Drivers",
    es: "Conductores Registrados",
    fr: "Chauffeurs Enregistrés",
    de: "Registrierte Fahrer"
    },
    "Dados do Veículo": {
    en: "Vehicle Data",
    es: "Datos del Vehículo",
    fr: "Données du véhicule",
    de: "Fahrzeugdaten"
    },
    "Marca": {
    en: "Brand",
    es: "Marca",
    fr: "Marque",
    de: "Marke"
    },
    "Modelo": {
    en: "Model",
    es: "Modelo",
    fr: "Modèle",
    de: "Modell"
    },
    "Ano de Fabricação": {
    en: "Year of Manufacture",
    es: "Año de Fabricación",
    fr: "Année de fabrication",
    de: "Baujahr"
    },
    "Kms Rodados": {
    en: "Mileage",
    es: "Kilómetros Recorridos",
    fr: "Kilométrage",
    de: "Kilometerstand"
    },
    "Manutenção Preventiva": {
    en: "Preventive Maintenance",
    es: "Mantenimiento Preventivo",
    fr: "Maintenance préventive",
    de: "Vorbeugende Wartung"
    },
    "Informe a data da última revisão ou o status atual dos itens abaixo para controle de frota inteligente.": {
    en: "Enter the date of the last service or current status of items below for smart fleet log.",
    es: "Ingrese la fecha de la última revisión o el estado actual de los elementos para control inteligente.",
    fr: "Saisissez la date de la dernière révision pour un contrôle intelligent.",
    de: "Geben Sie das Datum der letzten Wartung oder den aktuellen Status der Elemente für die Flottensteuerung ein."
    },
    "Troca de óleo": {
    en: "Oil change",
    es: "Cambio de aceite",
    fr: "Vidange d'huile",
    de: "Ölwechsel"
    },
    "Filtro de óleo": {
    en: "Oil filter",
    es: "Filtro de aceite",
    fr: "Filtre à huile",
    de: "Ölfilter"
    },
    "Filtro de ar": {
    en: "Air filter",
    es: "Filtro de aire",
    fr: "Filtre à air",
    de: "Luftfilter"
    },
    "Pneus (Rodagem)": {
    en: "Tyres (Wear)",
    es: "Neumáticos (Desgaste)",
    fr: "Pneus (Usure)",
    de: "Reifen (Verschleiß)"
    },
    "Pastilha de freio": {
    en: "Brake pads",
    es: "Pastillas de freno",
    fr: "Plaquettes de frein",
    de: "Bremsbeläge"
    },
    "Última Troca": {
    en: "Last Change",
    es: "Último Cambio",
    fr: "Dernier changement",
    de: "Letzter Wechsel"
    },
    "Próxima Troca": {
    en: "Next Change",
    es: "Próximo Cambio",
    fr: "Prochain changement",
    de: "Nächster Wechsel"
    },
    "Agendada": {
    en: "Scheduled",
    es: "Programado",
    fr: "Programmé",
    de: "Geplant"
    },
    "0% Em dia": {
    en: "0% Good",
    es: "0% Al día",
    fr: "0% À jour",
    de: "0% Ok"
    },
    "100% Vencedor": {
    en: "100% Overdue",
    es: "100% Vencido",
    fr: "100% Échu",
    de: "100% Fällig"
    },
    "Observações Adicionais": {
    en: "Additional Notes",
    es: "Notas Adicionales",
    fr: "Notes additionnelles",
    de: "Zusätzliche Notizen"
    },
    "Registre aqui informações relevantes, histórico de sinistros ou detalhes específicos do veículo.": {
    en: "Record relevant info, claims history, or specific vehicle details here.",
    es: "Registre aquí información relevante, historial de reclamos o detalles específicos.",
    fr: "Saisissez les informations importantes sur le véhicule ici.",
    de: "Tragen Sie hier relevante Informationen, Schadensfälle oder spezifische Details ein."
    },
    "Ao gravar, o veículo será automaticamente integrado ao módulo de roteirização, agenda de viagens, e dashboard.": {
    en: "Upon saving, the vehicle will be automatically integrated into the routing, travel logs, and dashboard.",
    es: "Al registrar, el vehículo se integrará automáticamente al módulo de enrutamiento, agenda de viajes y panel.",
    fr: "Le véhicule sera automatiquement intégré au module d'itinéraire et au tableau de bord.",
    de: "Nach dem Speichern wird das Fahrzeug automatisch in die Routenplanung, den Reisekalender und das Dashboard integriert."
    },
    "Frota Ativa": {
    en: "Active Fleet",
    es: "Flota Activa",
    fr: "Flotte Active",
    de: "Aktive Flotte"
    },
    "Nenhum veículo registrado.": {
    en: "No registered vehicles.",
    es: "No hay vehículos registrados.",
    fr: "Aucun véhicule enregistré.",
    de: "Keine registrierten Fahrzeuge."
    },
    "Veículo": {
    en: "Vehicle",
    es: "Vehículo",
    fr: "Véhicule",
    de: "Fahrzeug"
    },
    "Fabricação": {
    en: "Manufacture",
    es: "Fabricación",
    fr: "Fabrication",
    de: "Baujahr"
    },
    "Óleo (%)": {
    en: "Oil (%)",
    es: "Aceite (%)",
    fr: "Huile (%)",
    de: "Öl (%)"
    },
    "Pneus (%)": {
    en: "Tyres (%)",
    es: "Neumáticos (%)",
    fr: "Pneus (%)",
    de: "Reifen (%)"
    },
    "Pastilha (%)": {
    en: "Brakes (%)",
    es: "Frenos (%)",
    fr: "Freins (%)",
    de: "Bremsen (%)"
    },
    "Nível crítico de manutenção!": {
    en: "Critical maintenance level!",
    es: "¡Nivel crítico de mantenimiento!",
    fr: "Niveau critique de maintenance !",
    de: "Kritischer Wartungszustand!"
    },
    "Abrir menu": {
    en: "Open menu",
    es: "Abrir menú",
    fr: "Ouvrir le menu",
    de: "Menü öffnen"
    },
    "Ir para o Dashboard": {
    en: "Go to Dashboard",
    es: "Ir al Dashboard",
    fr: "Aller au Tableau de Bord",
    de: "Zum Dashboard wechseln"
    },
    "Fechar menu": {
    en: "Close menu",
    es: "Cerrar menú",
    fr: "Fermer le menu",
    de: "Menü schließen"
    },
    "Valor Gerado": {
    en: "Value Generated",
    es: "Valor Generado",
    fr: "Valeur Générée",
    de: "Generierter Wert"
    },
    "Cálculo de faturamento efetivado": {
    en: "Calculation of effective billing",
    es: "Cálculo de facturación efectiva",
    fr: "Calcul de facturation effective",
    de: "Berechnung der effektiven Abrechnung"
    },
    "Valor Orçado": {
    en: "Budgeted Value",
    es: "Valor Presupuestado",
    fr: "Valeur Budgétisée",
    de: "Budgetierter Wert"
    },
    "Projeções em elaboração": {
    en: "Projections in preparation",
    es: "Proyecciones en preparación",
    fr: "Projections en cours d'élaboration",
    de: "Prognosen in Vorbereitung"
    },
    "Meta Mensal": {
    en: "Monthly Goal",
    es: "Meta Mensual",
    fr: "Objectif Mensuel",
    de: "Monatliches Ziel"
    },
    "Meta:": {
    en: "Goal:",
    es: "Meta:",
    fr: "Objectif :",
    de: "Ziel:"
    },
    "Análise de Valor Gerado, Orçado e Metas": {
    en: "Analysis of Generated Value, Budgeted Value, and Goals",
    es: "Análisis de Valor Generado, Presupuestado y Metas",
    fr: "Analyse de la Valeur Générée, Budgétisée et des Objectifs",
    de: "Analyse von generiertem Wert, budgetiertem Wert und Zielen"
    },
    "Barras": {
    en: "Bars",
    es: "Barras",
    fr: "Barres",
    de: "Balken"
    },
    "Linhas": {
    en: "Lines",
    es: "Líneas",
    fr: "Lignes",
    de: "Linien"
    },
    "Gerado": {
    en: "Generated",
    es: "Generado",
    fr: "Généré",
    de: "Generiert"
    },
    "Orçado": {
    en: "Budgeted",
    es: "Presupuestado",
    fr: "Budgétisé",
    de: "Budgetiert"
    },
    "Metas": {
    en: "Goals",
    es: "Metas",
    fr: "Objectifs",
    de: "Ziele"
    },
    "Aguardando dados para comparação. Quando houver contratos ativos e agendas, o comparativo semanal de faturamentos será exibido aqui.": {
    en: "Awaiting comparison data. When there are active contracts and appointments, the weekly comparison of billings will be displayed here.",
    es: "Esperando datos de comparación. Cuando haya contratos activos y citas, se mostrará aquí la comparación semanal de facturación.",
    fr: "En attente de données de comparaison. Lorsqu'il y aura des contrats actifs et des rendez-vous, la comparaison hebdomadaire des facturations sera affichée ici.",
    de: "Warte auf Vergleichsdaten. Wenn es aktive Verträge und Termine gibt, wird hier der wöchentliche Abrechnungsvergleich angezeigt."
    },
    "Projeções Financeiras": {
    en: "Financial Projections",
    es: "Proyecciones Financieras",
    fr: "Projections Financières",
    de: "Finanzprognosen"
    },
    "Comparativo de performance mensal": {
    en: "Monthly performance comparison",
    es: "Comparación de rendimiento mensual",
    fr: "Comparaison mensuelle des performances",
    de: "Monatlicher Leistungsvergleich"
    },
    "Período: 2026": {
    en: "Period: 2026",
    es: "Período: 2026",
    fr: "Période : 2026",
    de: "Zeitraum: 2026"
    },
    "Período: 2025": {
    en: "Period: 2025",
    es: "Período: 2025",
    fr: "Période : 2025",
    de: "Zeitraum: 2025"
    },
    "Desempenho e vínculo de carteiras": {
    en: "Performance and portfolio tracking",
    es: "Rendimiento y seguimiento de carteras",
    fr: "Performance et suivi des portefeuilles",
    de: "Leistung und Portfolio-Bindung"
    },
    "Selecionar Executivo": {
    en: "Select Executive",
    es: "Seleccionar Ejecutivo",
    fr: "Sélectionner un Responsable",
    de: "Führungskraft auswählen"
    },
    "Contratos vinculados atualmente:": {
    en: "Currently linked contracts:",
    es: "Contratos vinculados actualmente:",
    fr: "Contrats actuellement liés :",
    de: "Derzeit verknüpfte Verträge:"
    },
    "Ativos": {
    en: "Active",
    es: "Activos",
    fr: "Actifs",
    de: "Aktiv"
    },
    "Mantenha a carteira sincronizada para o rateio correto.": {
    en: "Keep the portfolio synchronized for the correct distribution.",
    es: "Mantenga la cartera sincronizada para la distribución correcta.",
    fr: "Gardez le portefeuille synchronisé pour une répartition correcte.",
    de: "Halten Sie das Portfolio für die richtige Verteilung synchron."
    },
    "Semana 1": {
    en: "Week 1",
    es: "Semana 1",
    fr: "Semaine 1",
    de: "Woche 1"
    },
    "Semana 2": {
    en: "Week 2",
    es: "Semana 2",
    fr: "Semaine 2",
    de: "Woche 2"
    },
    "Semana 3": {
    en: "Week 3",
    es: "Semana 3",
    fr: "Semaine 3",
    de: "Woche 3"
    },
    "Semana 4": {
    en: "Week 4",
    es: "Semana 4",
    fr: "Semaine 4",
    de: "Woche 4"
    },
    "Planilha CSV (.csv)": {
    en: "CSV Spreadsheet (.csv)",
    es: "Hoja de cálculo CSV (.csv)",
    fr: "Feuille de calcul CSV (.csv)",
    de: "CSV-Tabelle (.csv)"
    },
    "Relatório PDF (.pdf)": {
    en: "PDF Report (.pdf)",
    es: "Informe PDF (.pdf)",
    fr: "Rapport PDF (.pdf)",
    de: "PDF-Bericht (.pdf)"
    },
    "Período (Data)": {
    en: "Period (Date)",
    es: "Período (Fecha)",
    fr: "Période (Date)",
    de: "Zeitraum (Datum)"
    },
    "Cliente": {
    en: "Client",
    es: "Cliente",
    fr: "Client",
    de: "Kunde"
    },
    "Todos os clientes": {
    en: "All clients",
    es: "Todos los clientes",
    fr: "Tous les clients",
    de: "Alle Kunden"
    },
    "Todas as placas": {
    en: "All plates",
    es: "Todas las placas",
    fr: "Toutes les plaques",
    de: "Alle Kennzeichen"
    },
    "Motorista": {
    en: "Driver",
    es: "Conductor",
    fr: "Chauffeur",
    de: "Fahrer"
    },
    "Todos os motoristas": {
    en: "All drivers",
    es: "Todos los conductores",
    fr: "Tous les chauffeurs",
    de: "Alle Fahrer"
    },
    "Status Comercial": {
    en: "Commercial Status",
    es: "Estado Comercial",
    fr: "Statut Commercial",
    de: "Vertriebsstatus"
    },
    "Todos os status": {
    en: "All statuses",
    es: "Todos los estados",
    fr: "Tous les statuts",
    de: "Alle Status"
    },
    "Completo": {
    en: "Complete",
    es: "Completo",
    fr: "Complet",
    de: "Komplett"
    },
    "Em Rota": {
    en: "In Route",
    es: "En Ruta",
    fr: "En Route",
    de: "In Fahrt"
    },
    "Pronto para analisar?": {
    en: "Ready to analyze?",
    es: "¿Listo para analizar?",
    fr: "Prêt à analyser ?",
    de: "Bereit zur Analyse?"
    },
    "Selecione os filtros acima para especificar os dados desejados e clique em": {
    en: "Select the filters above to specify the desired data and click on",
    es: "Seleccione los filtros de arriba para especificar los datos deseados y haga clic en",
    fr: "Sélectionnez les filtres ci-dessus pour spécifier les données souhaitées et cliquez sur",
    de: "Wählen Sie die obigen Filter aus, um die gewünschten Daten anzugeben, und klicken Sie auf"
    },
    "para visualizar os resultados detalhados, faturamentos, KMs e taxas de conversões.": {
    en: "to view detailed results, invoices, KMs, and conversion rates.",
    es: "para ver resultados detallados, facturación, kilómetros y tasas de conversión.",
    fr: "pour afficher les résultats détaillés, la facturation, les kilomètres et les taux de conversion.",
    de: "um detaillierte Ergebnisse, Abrechnungen, Kilometer und Konversionsraten anzuzeigen."
    },
    "Produtividade": {
    en: "Productivity",
    es: "Productividad",
    fr: "Productivité",
    de: "Produktivität"
    },
    "Km rodados e tempo de rota.": {
    en: "Mileage and route time.",
    es: "Kilómetros recorridos y tiempo de ruta.",
    fr: "Kilométrage et temps de trajet.",
    de: "Gefahrene Kilometer und Routenzeit."
    },
    "Financeiro": {
    en: "Financial",
    es: "Financiero",
    fr: "Financier",
    de: "Finanzen"
    },
    "Receita por viagem e custos fixos.": {
    en: "Revenue per travel and fixed costs.",
    es: "Ingresos por viaje y costos fijos.",
    fr: "Revenu par voyage et coûts fixes.",
    de: "Umsatz pro Reise und Fixkosten."
    },
    "Comercial": {
    en: "Commercial",
    es: "Comercial",
    fr: "Commercial",
    de: "Vertrieb"
    },
    "Conversão de orçamentos e leads.": {
    en: "Conversion of quotes and leads.",
    es: "Conversión de presupuestos y leads.",
    fr: "Conversion des devis et leads.",
    de: "Konvertierung von Angeboten und Leads."
    },
    "Resultado Faturamento": {
    en: "Billing Outcome",
    es: "Resultado Facturación",
    fr: "Résultat Facturation",
    de: "Abrechnungsergebnis"
    },
    "Somados de viagem": {
    en: "Travels summed",
    es: "Viajes sumados",
    fr: "Voyages cumulés",
    de: "Reisen summiert"
    },
    "Rodagem Estimada": {
    en: "Estimated Mileage",
    es: "Recorrido Estimado",
    fr: "Kilométrage Estimé",
    de: "Geschätzte Kilometer"
    },
    "Base de faturamento cooperativo": {
    en: "Corporate billing base",
    es: "Base de facturación corporativa",
    fr: "Base de facturation d'entreprise",
    de: "Gemeinsame Abrechnungsbasis"
    },
    "Viagens Encontradas": {
    en: "Travels Found",
    es: "Viajes Encontrados",
    fr: "Voyages Trouvés",
    de: "Gefundene Reisen"
    },
    "Viagens": {
    en: "Travels",
    es: "Viajes",
    fr: "Voyages",
    de: "Reisen"
    },
    "Completadas": {
    en: "Completed",
    es: "Completadas",
    fr: "Complétées",
    de: "Abgeschlossen"
    },
    "Aderência Comercial": {
    en: "Commercial Matching",
    es: "Adherencia Comercial",
    fr: "Adhérence Commerciale",
    de: "Vertriebliche Übereinstimmung"
    },
    "Gerações vs. Orçado": {
    en: "Invoiced vs. Budgeted",
    es: "Generaciones vs. Presupuestado",
    fr: "Facturé vs Budgétisé",
    de: "Generiert vs Budgetiert"
    },
    "Detalhamento de Viagens Encontradas": {
    en: "Detailed Breakdown of Travels Found",
    es: "Desglose de Viajes Encontrados",
    fr: "Détail des Voyages Trouvés",
    de: "Detaillierte Übersicht gefundener Reisen"
    },
    "Mapeamento de faturamentos filtrados": {
    en: "Mapping of filtered billing",
    es: "Mapeo de facturación filtrada",
    fr: "Mappage de facturation filtrée",
    de: "Mapping gefilterter Abrechnungen"
    },
    "Limpar Filtros e Resetar": {
    en: "Clear Filters and Reset",
    es: "Limpiar Filtros y Reiniciar",
    fr: "Effacer les filtres et réinitialiser",
    de: "Filter löschen und zurücksetzen"
    },
    "Nenhuma viagem correspondente aos filtros foi encontrada. Reescreva os filtros acima e gere novamente.": {
    en: "No travel matching the filters was found. Please change the filters above and generate again.",
    es: "No se encontró ningún viaje correspondiente a los filtros. Reescriba los filtros de arriba y genere nuevamente.",
    fr: "Aucun voyage correspondant aux filtres n'a été trouvé. Veuillez modifier les filtres ci-dessus et générer de nouveau.",
    de: "Es wurde keine Reise gefunden, die den Filtern entspricht. Bitte ändern Sie die obigen Filter und erstellen Sie den Bericht erneut."
    },
    "Data": {
    en: "Date",
    es: "Fecha",
    fr: "Date",
    de: "Datum"
    },
    "Rota (Origem / Destino)": {
    en: "Route (Origin / Destination)",
    es: "Ruta (Origen / Destino)",
    fr: "Itinéraire (Origine / Destination)",
    de: "Route (Start / Ziel)"
    },
    "Status": {
    en: "Status",
    es: "Estado",
    fr: "Statut",
    de: "Status"
    },
    "Meta Mensal de Faturamento (R$)": {
    en: "Monthly Revenue Goal (R$)",
    es: "Meta Mensual de Facturación (R$)",
    fr: "Objectif Mensuel de Chiffre d'Affaires (R$)",
    de: "Monatlicher Umsatzziel (R$)"
    },
    "Definido pelos administradores da Eixo CRM": {
    en: "Defined by Eixo CRM administrators",
    es: "Definido por los administradores de Eixo CRM",
    fr: "Défini par les administrateurs d'Eixo CRM",
    de: "Festgelegt durch die Eixo CRM-Administratoren"
    },
    "O sistema de Fleet Management da **Eixo** permite a integridade e sincronização cruzada de dados operacionais nos seguintes pilares:": {
    en: "The Eixo Fleet Management system allows integrity and cross-synchronization of operational data based on these pillars:",
    es: "El sistema de Fleet Management de Eixo permite la integridad y sincronización cruzada de datos operativos en los siguientes pilares:",
    fr: "Le système de Fleet Management d'Eixo permet l'intégrité et la synchronisation croisée des données opérationnelles sur les piliers suivants :",
    de: "Das Eixo Fleet Management System ermöglicht die Integrität und Kreuzsynchronisation betrieblicher Daten auf folgenden Säulen:"
    },
    "Gravação de Clientes": {
    en: "Client Registration",
    es: "Registro de Clientes",
    fr: "Enregistrement des Clients",
    de: "Kundenregistrierung"
    },
    "Vincula CNPJ/CPF com os executivos comerciais selecionados.": {
    en: "Links CNPJ/CPF with selected sales executives.",
    es: "Vincula CNPJ/CPF con los ejecutivos comerciales seleccionados.",
    fr: "Associe le CNPJ/CPF aux commerciaux sélectionnés.",
    de: "Verknüpft CNPJ/CPF mit ausgewählten Vertriebsmitarbeitern."
    },
    "Veículos": {
    en: "Vehicles",
    es: "Vehículos",
    fr: "Véhicules",
    de: "Fahrzeuge"
    },
    "Controla a saúde da frota por meio de indicadores preventivos (%) sincronizados live.": {
    en: "Tracks fleet health using live synchronized preventive indicators (%).",
    es: "Controla la salud de la flota mediante indicadores preventivos (%) sincronizados en vivo.",
    fr: "Contrôle la santé de la flotte via des indicateurs préventifs (%) synchronisés en direct.",
    de: "Steuert die Gesundheit der Flotte über live synchronisierte präventive Indikatoren (%)."
    },
    "Alocação de Viagens": {
    en: "Travel Allocation",
    es: "Asignación de Viajes",
    fr: "Allocation de Voyages",
    de: "Reisezuordnung"
    },
    "O cronograma do calendário de Janeiro de 2026 calcula faturamentos, custos, status e vinculações instantâneas.": {
    en: "The calendar schedule in January 2026 computes billing, costs, status, and instant linkage.",
    es: "El cronograma del calendario en enero de 2026 calcula la facturación, los costos, el estado y las vinculaciones instantáneas.",
    fr: "Le calendrier de janvier 2026 calcule la facturation, les coûts, le statut et les liaisons instantanées.",
    de: "Der Zeitplan für Januar 2026 berechnet Abrechnungen, Kosten, Status und sofortige Verknüpfungen."
    },
    "aviso_limpar_sucesso": {
    en: "Database cleared successfully! CRM is now completely empty.",
    es: "¡Base de datos limpiada con éxito! El CRM está completamente vacío.",
    pt: "Banco de dados limpo com sucesso! O CRM agora está completamente vazio.",
    fr: "Base de données vidée avec succès ! Le CRM est maintenant complètement vide.",
    de: "Datenbank erfolgreich gelöscht! Das CRM ist jetzt komplett leer."
    },
    "Filtros Avançados": {
    en: "Advanced Filters",
    es: "Filtros Avanzados",
    fr: "Filtres Avancés",
    de: "Erweiterte Filter"
    },
    "VEÍCULO": {
    en: "VEHICLE",
    es: "VEHÍCULO",
    fr: "VÉHICULE",
    de: "FAHRZEUG"
    },
    "MOTORISTA": {
    en: "DRIVER",
    es: "CONDUCTOR",
    fr: "CHAUFFEUR",
    de: "FAHRER"
    },
    "Veículos cadastrados": {
    en: "Vehicles registered",
    es: "Vehículos registrados",
    fr: "Véhicules enregistrés",
    de: "Fahrzeuge registriert"
    },
    "de Prontidão": {
    en: "on Standby",
    es: "de Guardia",
    fr: "de Garde",
    de: "Bereit"
    },
    "Estado da Agenda": {
    en: "Schedule State",
    es: "Estado de la Agenda",
    fr: "État de l'Agenda",
    de: "Belegungsstatus"
    },
    "Seu calendário de Janeiro de 2026 está virgem. Inicie selecionando ": {
    en: "Your January 2026 calendar is empty. Start by selecting ",
    es: "Su calendario de enero de 2026 está vacío. Comience seleccionando ",
    fr: "Votre calendrier de janvier 2026 est vide. Commencez par sélectionner ",
    de: "Ihr Kalender für Januar 2026 ist leer. Beginnen Sie mit der Auswahl "
    },
    "Seu calendário de Janeiro tem": {
    en: "Your January calendar has",
    es: "Su calendario de enero tiene",
    fr: "Votre calendrier de janvier a",
    de: "Ihr Kalender für Januar hat"
    },
    "viagens e planejamentos configurados.": {
    en: "travels and schedules configured.",
    es: "viajes y planeaciones configuradas.",
    fr: "voyages et plannings configurés.",
    de: "Reisen und Planungen konfiguriert."
    },
    "Nova Alocação de Viagem": {
    en: "New Travel Allocation",
    es: "Nueva Asignación de Viaje",
    fr: "Nouvelle Allocation de Voyage",
    de: "Neue Reisezuweisung"
    },
    "Cliente Responsável": {
    en: "Responsible Client",
    es: "Cliente Responsable",
    fr: "Client Responsable",
    de: "Verantwortlicher Kunde"
    },
    "Escolha um cliente": {
    en: "Choose a client",
    es: "Elija un cliente",
    fr: "Choisissez un client",
    de: "Wählen Sie einen Kunden"
    },
    "Dia Programado": {
    en: "Scheduled Day",
    es: "Día Programado",
    fr: "Jour Programmé",
    de: "Geplanter Tag"
    },
    "Status da Viagem": {
    en: "Travel Status",
    es: "Estado del Viaje",
    fr: "Statut du Voyage",
    de: "Reisestatus"
    },
    "Veículo Alocado": {
    en: "Allocated Vehicle",
    es: "Vehículo Asignado",
    fr: "Véhicule Alloué",
    de: "Zugewiesenes Fahrzeug"
    },
    "Motorista Alocado": {
    en: "Allocated Driver",
    es: "Conductor Asignado",
    fr: "Chauffeur Alloué",
    de: "Zugewiesener Fahrer"
    },
    "Valor Gerado (R$)": {
    en: "Value Generated (R$)",
    es: "Valor Generado (R$)",
    fr: "Valeur Générée (R$)",
    de: "Generierter Wert (R$)"
    },
    "Valor Orçado (R$)": {
    en: "Value Budgeted (R$)",
    es: "Valor Presupuestado (R$)",
    fr: "Valeur Budgétisée (R$)",
    de: "Budgetierter Wert (R$)"
    },
    "Agendar Viagem": {
    en: "Schedule Travel",
    es: "Programar Viaje",
    fr: "Planifier le voyage",
    de: "Reise planen"
    },
    "Dom": {
    en: "Sun",
    es: "Dom",
    fr: "Dim",
    de: "So"
    },
    "Seg": {
    en: "Mon",
    es: "Lun",
    fr: "Lun",
    de: "Mo"
    },
    "Ter": {
    en: "Tue",
    es: "Mar",
    fr: "Mar",
    de: "Di"
    },
    "Qua": {
    en: "Wed",
    es: "Mié",
    fr: "Mer",
    de: "Mi"
    },
    "Qui": {
    en: "Thu",
    es: "Jue",
    fr: "Jeu",
    de: "Do"
    },
    "Sex": {
    en: "Fri",
    es: "Vie",
    fr: "Ven",
    de: "Fr"
    },
    "Sáb": {
    en: "Sat",
    es: "Sáb",
    fr: "Sam",
    de: "Sa"
    },
    "de Janeiro (Sexta)": {
    en: "of January (Friday)",
    es: "de enero (viernes)",
    fr: "de janvier (vendredi)",
    de: "Januar (Freitag)"
    },
    "de Janeiro (Sábado)": {
    en: "of January (Saturday)",
    es: "de enero (sábado)",
    fr: "de janvier (samedi)",
    de: "Januar (Samstag)"
    },
    "de Janeiro (Domingo)": {
    en: "of January (Sunday)",
    es: "de enero (domingo)",
    fr: "de janvier (dimanche)",
    de: "Januar (Sonntag)"
    },
    "de Janeiro (Segunda)": {
    en: "of January (Monday)",
    es: "de enero (lunes)",
    fr: "de janvier (lundi)",
    de: "Januar (Montag)"
    },
    "de Janeiro (Terça)": {
    en: "of January (Tuesday)",
    es: "de enero (martes)",
    fr: "de janvier (mardi)",
    de: "Januar (Dienstag)"
    },
    "de Janeiro (Quarta)": {
    en: "of January (Wednesday)",
    es: "de enero (miércoles)",
    fr: "de janvier (mercredi)",
    de: "Januar (Mittwoch)"
    },
    "de Janeiro (Quinta)": {
    en: "of January (Thursday)",
    es: "de enero (jueves)",
    fr: "de janvier (jeudi)",
    de: "Januar (Donnerstag)"
    },
  };
  
  const entry = dictionary[key];
  if (entry && entry[lang]) {
    return entry[lang];
  }
  return key;
}
