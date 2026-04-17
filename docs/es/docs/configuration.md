# Configuración

Esta página te ayuda a configurar NimoteCode para uso diario estable con enfoque en AI, SSH y flujos de trabajo de tareas.

## Estrategia de configuración AI

Crea al menos dos perfiles:

- Perfil principal para codificación diaria
- Perfil de respaldo para conmutación por error o control de costos

Ajusta cada perfil para tu estilo de uso:

- Menor aleatoriedad para tareas de codificación precisas
- Mayor contexto para razonamiento de proyectos grandes
- Streaming habilitado para respuesta percibida más rápida

## Lista de verificación de configuración de proveedor AI

- Agrega proveedor, clave API, punto de conexión y modelo
- Verifica respuestas en AI Chat
- Confirma que AI Agent puede ejecutar con tu perfil seleccionado
- Mantiene prompts y límites alineados con objetivos de costo/rendimiento
- Las claves API se almacenan a través de almacenamiento seguro de plataforma (por ejemplo, almacenamiento basado en iOS Keychain / Android Keystore)

## Estrategia de configuración SSH

Para cada entorno de servidor, mantén un perfil dedicado:

- Nombre de entorno (por ejemplo: Staging, Production)
- Host, puerto, usuario y método de autenticación
- Ruta raíz de espacio de trabajo estable para navegación predecible

Recomendado:

- Usa autenticación basada en clave para servidores de producción
- Separa entornos de alto y bajo riesgo
- Valida derechos de acceso antes de ejecutar tareas
- Si se usa autenticación por contraseña, trátala como solo para sesión: la contraseña se usa en memoria y no se conserva en almacenamiento local de perfil SSH

## Estrategia de configuración de Tasks

Diseña tareas alrededor de resultados repetitivos:

- Compilación y prueba
- Linting y formateo
- Reinicio de servicio y comprobaciones de salud
- Accesos directos de inspección de registros

Consejos:

- Usa nombres de tarea claros por convención de equipo
- Agrupa tareas relacionadas para filtrado rápido
- Mantiene comandos de alto riesgo claramente etiquetados

## Línea base lista para lanzamiento

Antes del uso diario, confirma:

1. El perfil de AI funciona en Chat y Agent
2. El perfil de SSH puede conectar y abrir espacio de trabajo
3. Al menos una tarea de compilación/prueba se ejecuta exitosamente
4. Source Control puede completar commit y sincronización
