// This dictionary contains 321 untranslated or inherited localization strings.
// These strings are commented out. Uncomment and edit them if you want to add your translations.
import { editorLocalization } from "survey-creator-core";

var spanishTranslation = {
  // survey templates
  survey: {
    edit: "Editar",
    externalHelpLink: "Mira y aprende a crear encuestas",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "¡Arrastra un tipo de pregunta para empezar a diseñar tu encuesta!",
    addLogicItem: "Cree una regla para personalizar el flujo de la encuesta",
    copy: "Copiar",
    duplicate: "Duplicar",
    addToToolbox: "Añadir a la caja de herramientas",
    deletePanel: "Eliminar panel",
    deleteQuestion: "Eliminar pregunta",
    convertTo: "Convertir a",
    drag: "Elemento de arrastre"
  },
  // Question types
  qt: {
    default: "Defecto",
    checkbox: "Caja",
    comment: "Comentario",
    imagepicker: "Selector de imágenes",
    ranking: "Ranking",
    image: "Imagen",
    dropdown: "Desplegable",
    // tagbox: "Tag Box",
    file: "Archivo",
    html: "Html",
    matrix: "Matriz (selección única)",
    matrixdropdown: "Matriz (opción múltiple)",
    matrixdynamic: "Matriz (filas dinámicas)",
    multipletext: "Múltiples textos",
    panel: "Panel",
    paneldynamic: "Panel (paneles dinámicos)",
    radiogroup: "Grupo de radio",
    rating: "Clasificación",
    text: "Entrada única",
    boolean: "Booleano",
    expression: "Expresión (solo lectura)",
    signaturepad: "Almohadilla de firma",
    // buttongroup: "Button Group"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Predeterminado ({0})",
    survey: "Encuesta",
    settings: "Configuración de la encuesta",
    settingsTooltip: "Configuración de encuesta abierta",
    // surveySettings: "Survey Settings",
    // surveySettingsTooltip: "Open survey settings",
    showPanel: "Mostrar panel",
    hidePanel: "Ocultar panel",
    // prevSelected: "Select previous",
    // nextSelected: "Select next",
    // surveyTypeName: "Survey",
    // pageTypeName: "Page",
    // panelTypeName: "Panel",
    // questionTypeName: "Question",
    // columnTypeName: "Column",
    addNewPage: "Añadir nueva página",
    moveRight: "Desplácese a la derecha",
    moveLeft: "Desplácese a la izquierda",
    deletePage: "Eliminar página",
    editPage: "Editar página",
    edit: "Editar",
    newPageName: "Página",
    newQuestionName: "Pregunta",
    newPanelName: "Panel",
    newTextItemName: "Texto",
    testSurvey: "Encuesta de prueba",
    // defaultV2Theme: "Default",
    // modernTheme: "Modern",
    // defaultTheme: "Default (legacy)",
    testSurveyAgain: "Encuesta de prueba de nuevo",
    testSurveyWidth: "Ancho de la encuesta:",
    navigateToMsg: "Tuviste que navegar a:",
    logic: "Lógica de la encuesta",
    embedSurvey: "Incrustar la encuesta",
    translation: "Traducción",
    saveSurvey: "Guardar la encuesta",
    saveSurveyTooltip: "Guardar la encuesta",
    designer: "Diseñador de la encuesta",
    jsonEditor: "Editor de JSON",
    // jsonHideErrors: "Hide errors",
    // jsonShowErrors: "Show errors",
    undo: "Deshacer",
    redo: "Rehacer",
    undoTooltip: "Deshacer el último cambio",
    redoTooltip: "Rehacer el cambio",
    // showMoreChoices: "Show more",
    // showLessChoices: "Show less",
    copy: "Copiar",
    cut: "Cortar",
    paste: "Pegar",
    copyTooltip: "Copia selección al portapapeles",
    cutTooltip: "Corta la selección al portapapeles",
    pasteTooltip: "Pega de portapapeles",
    options: "Opciones",
    generateValidJSON: "Generar un JSON válido",
    generateReadableJSON: "Generar JSON legible",
    toolbox: "Caja de herramientas",
    "property-grid": "Propiedades",
    // propertyGridFilteredTextPlaceholder: "Type to search...",
    toolboxGeneralCategory: "general",
    // toolboxChoiceCategory: "Choice Questions",
    // toolboxTextCategory: "Text Input Questions",
    // toolboxContainersCategory: "Containers",
    // toolboxMatrixCategory: "Matrix Questions",
    // toolboxMiscCategory: "Misc",
    correctJSON: "Por favor, corrija JSON",
    surveyResults: "Resultado de la encuesta:",
    surveyResultsTable: "Como Tabla",
    surveyResultsJson: "Como JSON",
    resultsTitle: "Título de la pregunta",
    resultsName: "Nombre de la pregunta",
    resultsValue: "Valor de respuesta",
    resultsDisplayValue: "Valor de visualización",
    modified: "Modificada",
    saving: "Guardando",
    saved: "Guardado",
    propertyEditorError: "error:",
    saveError: "¡Error!El contenido del editor no se ha guardado",
    // translationPropertyGridTitle: "Language Settings",
    // translationLanguages: "Languages",
    translationAddLanguage: "Seleccione el idioma para traducir",
    translationShowAllStrings: "Mostrar todos los textos",
    // translationShowUsedStringsOnly: "Used Strings Only",
    translationShowAllPages: "Mostrar todas las páginas",
    translationNoStrings: "Sin cuerdas para traducir. Por favor, cambie el filtro",
    translationExportToSCVButton: "Exportar a CSV",
    translationImportFromSCVButton: "Importación de CSV",
    translationMergeLocaleWithDefault: "Merge {0} con lugar predeterminado",
    // translationPlaceHolder: "Translation...",
    bold: "Negrita",
    italic: "Itálica",
    underline: "Subrayar",
    addNewQuestion: "Añadir pregunta",
    selectPage: "Seleccionar página ...",
    // htmlPlaceHolder: "HTML content will be here.",
    // panelPlaceHolder: "Drop a question from the toolbox here.",
    // surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below.",
    // addNewTypeQuestion: "Add {0}", //{0} is localizable question type
    // chooseLogoPlaceholder: "[LOGO]",
    // auto: "auto",
    lg: {
      // addNewItem: "Add New Rule",
      // empty_tab: "Create a rule to customize the flow of the survey.",
      page_visibilityName: "Visibilidad de la pagina",
      // page_enableName: "Enable (disable) page",
      panel_visibilityName: "Visibilidad del panel",
      panel_enableName: "Panel habilitar / deshabilitar",
      question_visibilityName: "Pregunta visibilidad",
      question_enableName: "Pregunta habilitar / deshabilitar",
      question_requireName: "Pregunta opcional requerida",
      // column_visibilityName: "Show (hide) column",
      // column_enableName: "Enable (disable) column",
      // column_requireName: "Make column required",
      trigger_completeName: "Encuesta completa",
      trigger_setvalueName: "Establecer valor de la pregunta",
      trigger_copyvalueName: "Copiar valor de la pregunta",
      trigger_skipName: "Saltar a la pregunta",
      trigger_runExpressionName: "Ejecutar la expresión personalizada",
      completedHtmlOnConditionName: "Texto personalizado 'Página de agradecimiento'",
      page_visibilityDescription: "Haga que la página sea visible cuando la expresión lógica vuelva verdadera. De lo contrario, manténgalo invisible",
      panel_visibilityDescription: "Haga que el panel sea visible cuando la expresión lógica vuelva verdadera. De lo contrario, manténgalo invisible",
      panel_enableDescription: "Haga el panel, y todos los elementos dentro de él, habiliten cuando la expresión lógica devuelve verdadero. De lo contrario, manténgalos deshabilitados",
      question_visibilityDescription: "Haz que la pregunta sea visible cuando la expresión lógica se devuelve 'verdadero'. De lo contrario, se mantiene invisible",
      question_enableDescription: "Haz que la pregunta se habilite cuando la expresión lógica devuelve 'verdadero'. De lo contrario, se mantiene deshabilitado",
      question_requireDescription: "La pregunta se requiere cuando la expresión lógica devuelve 'verdadero'",
      trigger_completeDescription: "Cuando la expresión lógica devuelve 'verdadero', la encuesta se completa y el usuario final ve la 'página de agradecimiento'",
      trigger_setvalueDescription: "Cuando se cambian los valores de las preguntas, que se usan en la expresión lógica, se cambian y la expresión lógica devuelve 'verdadero', entonces el valor se establece en la pregunta seleccionada",
      trigger_copyvalueDescription: "Cuando se cambian los valores de las preguntas, que se usan en la expresión lógica, se cambian y la expresión lógica devuelve 'verdadero', entonces el valor de una pregunta seleccionada se copia a otra pregunta seleccionada",
      trigger_skipDescription: "Cuando la expresión lógica devuelve 'verdadero', la encuesta salta a la pregunta seleccionada",
      trigger_runExpressionDescription: "Cuando la expresión lógica devuelve 'verdadero', entonces se realiza la expresión personalizada. Es posible que opcionalmente establezca este resultado de expresión en la pregunta seleccionada",
      completedHtmlOnConditionDescription: "Si la expresión lógica devuelve 'verdadero', entonces el texto predeterminado para la 'página de agradecimiento' se cambia por el texto dado",
      itemExpressionText: "Cuando la expresión: '{0}' devuelve VERDADERO:", //{0} - the expression
      // itemEmptyExpressionText: "New rule",
      page_visibilityText: "Hacer la página {0} Visible", //{0} page name
      panel_visibilityText: "Hacer panel {0} visible", //{0} panel name
      panel_enableText: "Hacer panel {0} habilitar", //{0} panel name
      question_visibilityText: "Hacer Pregunta {0} Visible", //{0} question name
      question_enableText: "Hacer Pregunta {0} Habilitar", //{0} question name
      question_requireText: "Hacer la pregunta {0} requerida", //{0} question name
      // column_visibilityText: "make column {0} of question {1} visible", //{0} column name, {1} question name
      // column_enableText: "make column {0} of question {1} enable", //{0} column name, {1} question name
      // column_requireText: "make column {0} of question {1} required", //{0} column name, {1} question name
      trigger_completeText: "La encuesta se completa",
      trigger_setvalueText: "En cuestión: {0} valor {1}", //{0} question name, {1} setValue
      trigger_copyvalueText: "Copiar en cuestión: {0} valor de la pregunta {1}", //{0} and {1} question names
      trigger_skipText: "Encuesta salta a la pregunta {0}", //{0} question name
      trigger_runExpressionText1: "Expresión de ejecución: '{0}'", //{0} the expression
      trigger_runExpressionText2: "y establecer su resultado en cuestión: {0}", //{0} question name
      completedHtmlOnConditionText: "Mostrar texto personalizado para la 'gracias página'",
      // showAllQuestions: "All Questions",
      // showAllActionTypes: "All Action Types",
      conditions: "Condición(es)",
      actions: "Comportamiento",
      expressionEditorTitle: "Definir la(s) condición(es)",
      actionsEditorTitle: "Definir la(s) acción(es)",
      deleteAction: "Eliminar acción",
      addNewAction: "Añadir nueva acción",
      selectedActionCaption: "Seleccione una acción para agregar ...",
      expressionInvalid: "La expresión lógica está vacía o inválida. Por favor corríjalo",
      noActionError: "Por favor, agregue al menos una acción",
      actionInvalid: "Por favor, solucione problemas en su(s) acción(es)",
      // expressionSetup: "",
      actionsSetup: " "
    }
  },
  // Property Editors
  pe: {
    apply: "Solicitar",
    ok: "ok",
    save: "Guardar",
    // clear: "Clear",
    saveTooltip: "Guardar",
    cancel: "Cancelar",
    // set: "Set",
    reset: "Reiniciar",
    // change: "Change",
    refresh: "Actualizar",
    close: "Cerrar",
    delete: "Borrar",
    add: "Agregar",
    addNew: "Añadir nuevo",
    addItem: "Haga clic para agregar un artículo ...",
    // removeItem: "Click to remove the item...",
    // dragItem: "Drag the item",
    addOther: "Otra",
    addSelectAll: "Seleccionar todo",
    addNone: "Ninguna",
    removeAll: "Eliminar todo",
    edit: "Editar",
    back: "Volver sin guardar",
    backTooltip: "Volver sin guardar",
    saveAndBack: "Guardar y volver",
    saveAndBackTooltip: "Guardar y volver",
    // doneEditing: "Done",
    editChoices: "Editar opciones",
    showChoices: "Mostrar opciones",
    move: "Moverse",
    empty: "<vaciar>",
    // emptyValue: "Value is empty",
    fastEntry: "Entrada rápida",
    // fastEntryNonUniqueError: "Value '{0}' is not unique",
    // fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}",
    // fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2",
    formEntry: "Entrada de forma",
    testService: "Probar el servicio",
    itemSelectorEmpty: "Por favor seleccione el elemento",
    conditionActionEmpty: "Por favor seleccione la acción",
    conditionSelectQuestion: "Seleccionar pregunta ...",
    conditionSelectPage: "Seleccionar página ...",
    conditionSelectPanel: "Seleccionar panel ...",
    conditionValueQuestionTitle: "Por favor ingrese / seleccione el valor",
    expressionHelp: "Puede usar soportes rizados para obtener acceso a los valores de la pregunta: {pregunta1} + {pregunta2}, ({precio} * {cantidad}) * (100 - {descuento}).Puede usar funciones como: IIF (), hoy (), edad (), min (), max (), cuenta (), AVG () y otros",
    aceEditorHelp: "Presione CTRL + ESPACIO para obtener sugerencia de completar la expresión",
    aceEditorRowTitle: "Fila actual",
    aceEditorPanelTitle: "Panel actual",
    showMore: "Para más detalles, por favor revise la documentación",
    assistantTitle: "Preguntas disponibles:",
    cellsEmptyRowsColumns: "Debe haber al menos una columna o fila",
    // showPreviewBeforeComplete: "Preview answers before submitting the survey",
    propertyIsEmpty: "Porfavor introduzca un valor",
    propertyIsNoUnique: "Por favor ingrese un valor único",
    propertyNameIsNotUnique: "Por favor ingrese un nombre único",
    listIsEmpty: "Añadir un nuevo artículo",
    // "listIsEmpty@choices": "No choices have been added yet",
    // "addNew@choices": "Add a choice",
    expressionIsEmpty: "La expresión está vacía",
    value: "Valor",
    text: "Texto",
    rowid: "ID de fila",
    imageLink: "Enlace de imágen",
    columnEdit: "Editar columna: {0}",
    itemEdit: "Editar artículo: {0}",
    url: "URL",
    path: "Camino",
    valueName: "Nombre de valor",
    choicesbyurl: {
      // valueName: "Get values from the following JSON field"
    },
    titleName: "Nombre del título",
    // imageLinkName: "Get image URLs from the following JSON field",
    allowEmptyResponse: "Permitir respuestas vacías",
    titlePlaceholder: "Título de entrada aquí",
    surveyTitlePlaceholder: "Título de la encuesta de entrada aquí",
    pageTitlePlaceholder: "Título de la página de entrada aquí",
    descriptionPlaceholder: "Ingrese una descripción",
    surveyDescriptionPlaceholder: "Ingrese una descripción de la encuesta",
    pageDescriptionPlaceholder: "Ingrese una descripción de la página",
    showOtherItem: "Tiene opción 'Otro'",
    otherText: "Cambiar texto 'Otro'",
    showNoneItem: "Tiene opcion 'Ninguno'",
    noneText: "Cambiar texto 'Ninguno'",
    showSelectAllItem: "Tiene opción 'Selecionar todo'",
    selectAllText: "Cambiar texto de 'Seleccionar todo'",
    choicesMin: "Valor mínimo para artículos generados automáticos",
    choicesMax: "Valor máximo para artículos generados automáticos",
    choicesStep: "La diferencia entre los artículos generados automáticos",
    name: "Nombre",
    title: "Título",
    cellType: "Tipo de célula",
    colCount: "Recuento de columnas",
    choicesOrder: "Seleccione el orden de las opciones",
    visible: "¿Es visible?",
    isRequired: "¿Se requiere?",
    isAllRowRequired: "Requerir respuesta para todas las filas",
    requiredErrorText: "Texto de error requerido",
    startWithNewLine: "¿Empieza con la nueva línea?",
    rows: "Número de filas",
    cols: "Recuento de columnas",
    placeholder: "Placeholder de entrada",
    showPreview: "Mostrar área de vista previa",
    storeDataAsText: "Tienda el contenido del archivo en el resultado de JSON como texto",
    maxSize: "Tamaño máximo de archivo en bytes",
    imageHeight: "Altura de imagen",
    imageWidth: "Ancho de la imagen",
    rowCount: "Número de filas",
    columnLayout: "Diseño de columnas",
    addRowLocation: "Añadir la ubicación del botón de la fila",
    addRowText: "Añadir texto de botón de fila",
    removeRowText: "Eliminar el texto del botón de fila",
    rateMin: "Valor mínimo",
    rateMax: "Valor máximo",
    rateStep: "Rango de los valores",
    minRateDescription: "Descripción del valor mínimo",
    maxRateDescription: "Descripción del valor máximo",
    inputType: "Tipo de entrada",
    optionsCaption: "Cambie texto de 'Seleccione'",
    defaultValue: "Valor por defecto",
    cellsDefaultRow: "Textos de celdas predeterminados",
    surveyEditorTitle: "Editar configuración de encuesta",
    qEditorTitle: "Editar: {0}",
    maxLength: "Longitud máxima",
    buildExpression: "Construir",
    editExpression: "Editar",
    // and: "and",
    // or: "or",
    remove: "Eliminar",
    addCondition: "Añadir condición",
    // emptyLogicPopupMessage: "Select a question to start configuring conditions.",
    // if: "If",
    // then: "then",
    // setToName: "Target question",
    // fromName: "Question to copy answer from",
    // gotoName: "Question to skip to",
    // ruleIsNotSet: "Rule is incorrect",
    // includeIntoResult: "Include into survey results",
    showTitle: "Mostrar / Ocultar Título",
    expandCollapseTitle: "Expandir / Contraer título",
    locale: "Idioma predeterminado",
    simulator: "Elige dispositivo",
    landscapeOrientation: "Orientación horizontal ",
    // portraitOrientation: "Switch to portrait orientation",
    mode: "Modo (editar / leer solamente)",
    clearInvisibleValues: "Claros valores invisibles",
    cookieName: "Nombre de la cookie (para deshabilitar la encuesta de ejecución dos veces localmente)",
    sendResultOnPageNext: "Enviar resultados de encuestas en la página Siguiente",
    storeOthersAsComment: "Almacenar 'Otros' valor en campo separado",
    showPageTitles: "Mostrar descripción de la página",
    showPageNumbers: "Mostrar números de página",
    pagePrevText: "Página de texto del botón anterior",
    pageNextText: "Página Siguiente botón de texto",
    completeText: "Texto completo del botón",
    previewText: "Vista previa del botón del botón",
    editText: "Editar botón de texto",
    startSurveyText: "Texto de inicio de la encuesta",
    showNavigationButtons: "Mostrar botones de navegación (navegación predeterminada)",
    showPrevButton: "Mostrar botón anterior (el usuario puede volver a la página anterior)",
    firstPageIsStarted: "La primera página en la encuesta es una página iniciada",
    showCompletedPage: "Mostrar la página completa al final (HTML finalizado)",
    goNextPageAutomatic: "Al responder todas las preguntas, vaya a la página siguiente automáticamente",
    showProgressBar: "Mostrar barra de progreso",
    questionTitleLocation: "Ubicación del título de la pregunta",
    requiredText: "La pregunta requerida (s) símbolo (s)",
    questionStartIndex: "Índice de inicio de la pregunta (1, 2 o 'A', 'A')",
    showQuestionNumbers: "Mostrar números de pregunta",
    questionTitleTemplate: "Plantilla de título de la pregunta, el valor predeterminado es: '{no}.{requiere} {título} '",
    questionErrorLocation: "Ubicación de error de la pregunta",
    focusFirstQuestionAutomatic: "Enfoca la primera pregunta al cambiar la página",
    questionsOrder: "Orden de elementos en la página",
    maxTimeToFinish: "Tiempo máximo para terminar la encuesta",
    maxTimeToFinishPage: "Tiempo máximo para terminar una página en la encuesta",
    page: {
      // maxTimeToFinish: "Time limit to finish the page (in seconds)"
    },
    question: {
      // page: "Parent page"
    },
    showTimerPanel: "Mostrar panel de temporizador",
    showTimerPanelMode: "Mostrar modo de panel del temporizador",
    renderMode: "Modo de renderizado",
    allowAddPanel: "Permitir agregar un panel",
    allowRemovePanel: "Permitir eliminar el panel",
    // noEntriesText: "Empty entries text",
    panelAddText: "Añadiendo texto del panel",
    panelRemoveText: "Eliminar texto del panel",
    isSinglePage: "Mostrar todos los elementos en una página",
    html: "Html",
    expression: "Expresión",
    // setValue: "Answer",
    // dataFormat: "Image format",
    // allowAddRows: "Allow adding rows",
    // allowRemoveRows: "Allow removing rows",
    // allowRowsDragAndDrop: "Allow row drag and drop",
    // responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height.",
    // minImageWidth: "Minimum image width",
    // maxImageWidth: "Maximum image width",
    // minImageHeight: "Minimum image height",
    // maxImageHeight: "Maximum image height",
    minValue: "Valor mínimo",
    maxValue: "Valor máximo",
    minLength: "Longitud mínima",
    allowDigits: "Permitir dígitos",
    minCount: "Cantidad mínima",
    maxCount: "Cantidad máxima",
    regex: "Expresión regular",
    surveyvalidator: {
      // text: "Error message",
      // expression: "Validation expression"
    },
    totalText: "Texto total",
    totalType: "Tipo total",
    totalExpression: "Expresión total",
    totalDisplayStyle: "Estilo de visualización total",
    totalCurrency: "Moneda total",
    totalFormat: "Formato total",
    // logo: "Logo (URL or base64-encoded string)",
    // questionsOnPageMode: "Survey structure",
    // maxTextLength: "Maximum answer length (in characters)",
    // maxOthersLength: "Maximum comment length (in characters)",
    // autoGrowComment: "Auto-expand comment area if necessary",
    // textUpdateMode: "Update text question value",
    // focusOnFirstError: "Set focus on the first invalid answer",
    // checkErrorsMode: "Run validation",
    // navigateToUrl: "Navigate to URL",
    // navigateToUrlOnCondition: "Dynamic URL",
    // completedBeforeHtml: "Markup to show if the user already filled out this survey",
    // completedHtml: "Survey Complete page markup",
    // completedHtmlOnCondition: "Dynamic Survey Complete page markup",
    // loadingHtml: "Markup to show while survey model is loading",
    // commentText: "Comment area text",
    // autocomplete: "Autocomplete type",
    // labelTrue: "\"True\" label",
    // labelFalse: "\"False\" label",
    allowClear: "Mostrar el título de las opciones",
    // displayStyle: "Value display style",
    // format: "Formatted string",
    // maximumFractionDigits: "Maximum fractional digits",
    // minimumFractionDigits: "Minimum fractional digits",
    // useGrouping: "Display grouping separators",
    // allowMultiple: "Allow multiple files",
    // allowImagesPreview: "Preview images",
    // acceptedTypes: "Accepted file types",
    // waitForUpload: "Wait for the upload to complete",
    // needConfirmRemoveFile: "Confirm file deletion",
    // detailPanelMode: "Detail panel location",
    // minRowCount: "Minimum row count",
    // maxRowCount: "Maximum row count",
    // confirmDelete: "Confirm row deletion",
    // confirmDeleteText: "Confirmation message",
    paneldynamic: {
      // confirmDelete: "Confirm panel deletion"
    },
    // panelCount: "Initial panel count",
    // minPanelCount: "Minimum panel count",
    // maxPanelCount: "Maximum panel count",
    // panelsState: "Inner panel expand state",
    // templateDescription: "Description template",
    // templateTitle: "Title template",
    // panelPrevText: "Previous Panel button tooltip",
    // panelNextText: "Next Panel button tooltip",
    // showRangeInProgress: "Show progress bar",
    // templateTitleLocation: "Question title location",
    // panelRemoveButtonLocation: "Remove Panel button location",
    // hideIfRowsEmpty: "Hide the question if there are no rows",
    // hideColumnsIfEmpty: "Hide columns if there are no rows",
    // rateValues: "Custom rate values",
    // hideIfChoicesEmpty: "Hide the question if it contains no choices",
    // hideNumber: "Hide question number",
    // minWidth: "Minimum width (in CSS-accepted values)",
    // maxWidth: "Maximum width (in CSS-accepted values)",
    // width: "Width (in CSS-accepted values)",
    // showHeader: "Show column headers",
    // horizontalScroll: "Show horizontal scrollbar",
    // columnMinWidth: "Minimum column width (in CSS-accepted values)",
    // rowTitleWidth: "Row header width (in CSS-accepted values)",
    // valueTrue: "\"True\" value",
    // valueFalse: "\"False\" value",
    // minErrorText: "\"Value is below minimum\" error message",
    // maxErrorText: "\"Value exceeds maximum\" error message",
    // otherErrorText: "\"Empty comment\" error message",
    // keyDuplicationError: "\"Non-unique key value\" error message",
    // maxSelectedChoices: "Maximum selected choices",
    // showClearButton: "Show the Clear button",
    // showNumber: "Show panel number",
    // logoWidth: "Logo width (in CSS-accepted values)",
    // logoHeight: "Logo height (in CSS-accepted values)",
    // readOnly: "Read-only",
    // enableIf: "Editable if",
    // emptyRowsText: "\"No rows\" message",
    // size: "Input size (in characters)",
    // separateSpecialChoices: "Separate special choices (None, Other, Select All)",
    // choicesFromQuestion: "Copy choices from the following question",
    // choicesFromQuestionMode: "Which choices to copy?",
    // showCommentArea: "Show the comment area",
    // commentPlaceholder: "Comment area placeholder",
    // displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values",
    // rowsOrder: "Row order",
    // columnsLayout: "Column layout",
    // columnColCount: "Nested column count",
    // state: "Panel expand state",
    // correctAnswer: "Correct Answer",
    // defaultPanelValue: "Default Values",
    // cells: "Cell Texts",
    // keyName: "Key column",
    itemvalue: {
      // text: "Alt text"
    },
    logoPosition: "Posición del logotipo",
    addLogo: "Añadir logo ...",
    changeLogo: "Cambiar logo ...",
    logoPositions: {
      none: "Eliminar logo",
      left: "Izquierda",
      right: "Derecha",
      top: "En la parte superior",
      bottom: "En la parte inferior"
    },
    tabs: {
      general: "General",
      fileOptions: "Opciones",
      html: "Editor HTML",
      columns: "Columnas",
      rows: "Filas",
      choices: "Opciones",
      items: "Artículos",
      visibleIf: "Visible si",
      enableIf: "Habilitar si",
      requiredIf: "Requerido si",
      rateValues: "Valores de la tasa",
      choicesByUrl: "Opciones de la web",
      matrixChoices: "Opciones predeterminadas",
      multipleTextItems: "Entradas de texto",
      numbering: "Numeración",
      validators: "Validadores",
      navigation: "Navegación",
      question: "Pregunta",
      pages: "Páginas",
      timer: "Horas / cuestionario",
      calculatedValues: "Valores calculados",
      triggers: "Disparadores",
      templateTitle: "Título de la plantilla",
      totals: "Totales",
      logic: "Lógica",
      layout: "Diseño",
      data: "Datos",
      validation: "Validación",
      cells: "Células",
      showOnCompleted: "Mostrar en completado",
      logo: "Logo en el título de la encuesta",
      slider: "Slider",
      // expression: "Expression",
      others: "Otras"
    },
    editProperty: "Editar propiedad '{0}'",
    items: "[Artículos: {0}]",
    // choicesVisibleIf: "Choices are visible if",
    // choicesEnableIf: "Choices are selectable if",
    // columnsEnableIf: "Columns are visible if",
    // rowsEnableIf: "Rows are visible if",
    // indent: "Add indents",
    panel: {
      // indent: "Add outer indents"
    },
    // innerIndent: "Add inner indents",
    // defaultValueFromLastRow: "Take default values from the last row",
    // defaultValueFromLastPanel: "Take default values from the last panel",
    enterNewValue: "Por favor, ingrese el valor",
    noquestions: "No hay ninguna pregunta en la encuesta",
    createtrigger: "Por favor crea un gatillo",
    titleKeyboardAdornerTip: "Presione el botón Entrar para editar",
    keyboardAdornerTip: "Presione el botón Entrar para editar el elemento, presione el botón Eliminar para eliminar el elemento, presione ALT Plus Flecha hacia arriba o hacia abajo para mover el elemento",
    triggerOn: "En",
    triggerMakePagesVisible: "Hacer visibles las páginas:",
    triggerMakeQuestionsVisible: "Hacer elementos visibles:",
    triggerCompleteText: "Completa la encuesta si tiene éxito",
    triggerNotSet: "El gatillo no se establece",
    triggerRunIf: "Correr si",
    triggerSetToName: "Cambio de valor de:",
    triggerFromName: "Copie el valor de:",
    triggerRunExpression: "Ejecute esta expresión:",
    triggerSetValue: "a:",
    triggerGotoName: "Ir a la pregunta:",
    triggerIsVariable: "No coloque la variable en el resultado de la encuesta",
    triggerRunExpressionEmpty: "Por favor ingrese una expresión válida",
    // emptyExpressionPlaceHolder: "Type expression here...",
    noFile: "Ningún archivo elegido",
    // clearIfInvisible: "Clear the value if the question becomes hidden",
    // valuePropertyName: "Value property name",
    // searchEnabled: "Enable search",
    // hideSelectedItems: "Hide selected items",
    // signatureWidth: "Signature width",
    // signatureHeight: "Signature height",
    // verticalAlign: "Vertical alignment",
    // alternateRows: "Alternate rows",
    // columnsVisibleIf: "Columns are visible if",
    // rowsVisibleIf: "Rows are visible if",
    // otherPlaceholder: "Comment area placeholder"
  },
  // Property values
  pv: {
    // true: "true",
    // false: "false",
    inherit: "heredar",
    show: "mostrar",
    hide: "esconder",
    default: "defecto",
    initial: "inicial",
    random: "aleatoria",
    collapsed: "colapsada",
    expanded: "expandida",
    none: "ninguna",
    asc: "ascendente",
    desc: "descendiendo",
    indeterminate: "indeterminada",
    // decimal: "decimal",
    // currency: "currency",
    // percent: "percent",
    firstExpanded: "Primer Expandido",
    off: "no mostrar",
    // onpanel: "Start on each panel",
    onPanel: "en Panel",
    onSurvey: "en Encuesta",
    list: "lista",
    progressTop: "Progreso superior",
    progressBottom: "Progreso inferior",
    progressTopBottom: "Progreso inferior/superior",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "arriba",
    bottom: "abajo",
    topBottom: "arriba y abajo",
    both: "ambas",
    left: "izquierda",
    // right: "Right",
    // color: "color",
    // date: "date",
    // datetime: "datetime",
    // "datetime-local": "datetime-local",
    // email: "email",
    // month: "month",
    // number: "number",
    // password: "password",
    // range: "range",
    // tel: "tel",
    // text: "text",
    // time: "time",
    // url: "url",
    // week: "week",
    hidden: "oculta",
    on: "mostrar",
    onPage: "en la página",
    edit: "editar",
    display: "mostrar",
    onComplete: "Al completarse",
    onHidden: "Al ocultarse",
    // onHiddenContainer: "When the question or its panel/page becomes hidden",
    clearInvisibleValues: {
      // none: "Never"
    },
    all: "todas",
    page: "página",
    survey: "encuesta",
    onNextPage: "Al cambiar página",
    onValueChanged: "Al cambiar valor",
    // onValueChanging: "Before an answer is changed",
    standard: "estándar",
    singlePage: "única página",
    questionPerPage: "Pregunta por página",
    noPreview: "sin vista previa",
    showAllQuestions: "Mostrar vista previa con todas las preguntas",
    showAnsweredQuestions: "Mostrar vista previa con preguntas contestadas",
    pages: "páginas",
    questions: "preguntas",
    requiredQuestions: "preguntas requeridas",
    correctQuestions: "preguntas correctas",
    buttons: "botones",
    underInput: "debajo de la respuesta",
    underTitle: "debajo del título",
    // onBlur: "On blur",
    // onTyping: "While typing",
    // underRow: "Under the row",
    // underRowSingle: "Under the row, only one panel is visible",
    showNavigationButtons: {
      // none: "Hidden"
    },
    showProgressBar: {
      // off: "Hidden"
    },
    showTimerPanel: {
      // none: "Hidden"
    },
    showTimerPanelMode: {
      // all: "Both"
    },
    detailPanelMode: {
      // none: "Hidden"
    },
    addRowLocation: {
      // default: "Depends on matrix layout"
    },
    panelsState: {
      // default: "Users cannot expand or collapse panels",
      // collapsed: "All panels are collapsed",
      // expanded: "All panels are expanded"
    },
    widthMode: {
      // auto: "Auto",
      // static: "Static",
      // responsive: "Responsive"
    },
    imageFit: {
      // none: "None",
      // contain: "Contain",
      // cover: "Cover",
      // fill: "Fill"
    },
    contentMode: {
      // auto: "Auto",
      // image: "Image",
      // video: "Video",
      // youtube: "YouTube"
    },
    displayMode: {
      // auto: "Auto",
      // buttons: "Buttons",
      // dropdown: "Dropdown"
    }
  },
  // Operators
  op: {
    empty: "esta vacio",
    notempty: "no está vacío",
    equal: "es igual a",
    notequal: "no es igual a",
    contains: "contiene",
    notcontains: "no contiene",
    anyof: "cualquiera de",
    allof: "todo",
    greater: "mayor que",
    less: "menos",
    greaterorequal: "Mayor o igual",
    lessorequal: "Menos o iguales",
    // and: "and",
    // or: "or"
  },
  // Embed window
  ew: {
    angular: "Usar la versión angular",
    jquery: "Usa la versión jQuery",
    knockout: "Usa la versión Knockout",
    react: "Use la versión de reacción",
    vue: "Usa la versión VUE",
    bootstrap: "Para marco de bootstrap",
    modern: "Tema moderno",
    default: "Tema predeterminado",
    orange: "Tema naranja",
    darkblue: "Tema DarkBlue",
    darkrose: "Tema de Darkrose",
    stone: "Tema de piedra",
    winter: "Tema de invierno",
    winterstone: "Tema de piedra de invierno",
    showOnPage: "Mostrar encuesta en una página",
    showInWindow: "Mostrar encuesta en una ventana",
    loadFromServer: "Encuesta de carga JSON del servidor",
    titleScript: "Scripts y estilos",
    titleHtml: "Html",
    titleJavaScript: "Javascript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Seleccione la página para probarlo:",
    showInvisibleElements: "Mostrar elementos invisibles",
    // hideInvisibleElements: "Hide invisible elements"
  },
  validators: {
    answercountvalidator: "Cantidad de respuestas",
    emailvalidator: "Email",
    expressionvalidator: "expresión",
    numericvalidator: "numérica",
    regexvalidator: "regex",
    textvalidator: "texto"
  },
  triggers: {
    completetrigger: "encuesta completa",
    setvaluetrigger: "valor ajustado",
    copyvaluetrigger: "Valor de copia",
    skiptrigger: "Saltar a la pregunta",
    runexpressiontrigger: "expresión de ejecución",
    visibletrigger: "Cambiar visibilidad"
  },
  pehelp: {
    // cookieName: "Cookies prevent users from filling out the same survey twice.",
    // format: "Use {0} as a placeholder for the actual value.",
    // totalText: "Visible only when at least one column has Total type or Total expression.",
    // acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information.",
    // columnColCount: "Applicable only to Radiogroup and Checkbox cell types.",
    // autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information.",
    // valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property.",
    choicesbyurl: {
      // valueName: " "
    },
    // keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error."
  },
  // Properties
  p: {
    title: {
      name: "título",
      title: "Dejarlo vacío, si es lo mismo que 'Name'"
    },
    // multiSelect: "Allow multiple selection",
    // showLabel: "Show image captions",
    // value: "Value",
    visibleIf: "visible si",
    // attachOriginalItems: "attachOriginalItems",
    // useDisplayValuesInDynamicTexts: "useDisplayValuesInDynamicTexts",
    titleLocation: "Localización del título",
    description: "Descripción",
    // descriptionLocation: "descriptionLocation",
    // defaultValueExpression: "defaultValueExpression",
    requiredIf: "Requerido si",
    validators: "Validadores",
    // bindings: "bindings",
    // renderAs: "renderAs",
    currency: "divisa",
    // cellHint: "cellHint",
    // isUnique: "isUnique",
    // showInMultipleColumns: "showInMultipleColumns",
    // totalMaximumFractionDigits: "totalMaximumFractionDigits",
    // totalMinimumFractionDigits: "totalMinimumFractionDigits",
    columns: "columnas",
    // detailElements: "detailElements",
    choices: "opciones",
    // allowAdaptiveActions: "allowAdaptiveActions",
    defaultRowValue: "Valor por defecto Fila",
    // detailPanelShowOnAdding: "detailPanelShowOnAdding",
    // logoFit: "logoFit",
    // pages: "pages",
    // questions: "questions",
    triggers: "disparadores",
    // calculatedValues: "calculatedValues",
    // surveyId: "surveyId",
    // surveyPostId: "surveyPostId",
    // surveyShowDataSaving: "surveyShowDataSaving",
    // questionDescriptionLocation: "questionDescriptionLocation",
    // progressBarType: "progressBarType",
    // questionTitlePattern: "questionTitlePattern",
    // widthMode: "widthMode",
    // showBrandInfo: "showBrandInfo",
    choicesByUrl: "opciones por URL",
    // choicesLazyLoadEnabled: "choicesLazyLoadEnabled",
    // choicesLazyLoadPageSize: "choicesLazyLoadPageSize",
    // inputFieldComponent: "inputFieldComponent",
    // itemComponent: "itemComponent",
    // min: "min",
    // max: "max",
    // minValueExpression: "minValueExpression",
    // maxValueExpression: "maxValueExpression",
    // step: "step",
    // dataList: "dataList",
    itemSize: "artículos",
    // elements: "elements",
    // content: "content",
    navigationButtonsVisibility: "Navegación botones visibilidad",
    // navigationTitle: "navigationTitle",
    // navigationDescription: "navigationDescription",
    // closeOnSelect: "closeOnSelect",
    // longTap: "longTap",
    // autoGrow: "autoGrow",
    // acceptCarriageReturn: "acceptCarriageReturn",
    // displayMode: "displayMode",
    label: "etiqueta",
    // contentMode: "contentMode",
    // imageFit: "imageFit",
    // altText: "altText",
    // height: "height",
    // penColor: "penColor",
    // backgroundColor: "backgroundColor",
    // templateElements: "templateElements",
    // operator: "operator",
    // isVariable: "isVariable",
    // runExpression: "runExpression",
    // showCaption: "showCaption",
    // iconName: "iconName",
    // iconSize: "iconSize"
  }
};

editorLocalization.locales["es"] = spanishTranslation;
