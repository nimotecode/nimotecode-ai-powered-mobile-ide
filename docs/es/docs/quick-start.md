# Inicio rápido (3 minutos)

Esta guía está optimizada para el primer éxito en una sesión.

## Objetivo

En 3 minutos, harás lo siguiente:

1. Abrir un espacio de trabajo
2. Ejecutar un comando real
3. Editar un archivo
4. Usar un panel de alto valor (Source Control / AI / Debug)

## Paso 1: Abrir espacio de trabajo (30 segundos)

Elige un modo:

- Local Explorer: abrir directorio de proyecto local
- Remote Explorer: conectar via SSH

Si usas modo remoto:

1. Crea perfil SSH (`host`, `port`, `username`)
2. Selecciona método de autenticación (contraseña o clave privada)
3. Conecta y confirma ruta raíz del espacio de trabajo

## Paso 2: Ejecutar comando en terminal (30 segundos)

1. Abre panel de terminal
2. Ejecuta comando de verificación (por ejemplo `pwd`, `ls` o tu comando build/test)
3. Si la salida es larga, usa búsqueda en terminal

## Paso 3: Editar y guardar (45 segundos)

1. Abre archivo fuente desde explorador
2. Edita una línea
3. Guarda archivo
4. Usa navegación por símbolos o buscar/reemplazar en archivo si es necesario

## Paso 4: Elige una ruta de resultado (75 segundos)

### Ruta A: Confirmar cambios

Abre Source Control y:

- inspecciona archivos modificados
- prepara cambios
- confirma (y envía si está configurado)

Referencia: [/es/docs/source-control](/es/docs/source-control)

### Ruta B: Pedir a AI que acelere

Abre panel AI y:

- elige configuración de proveedor
- pide explicación/refactorización/sugerencias de corrección
- opcionalmente ejecuta AI Agent para automatización de flujo de trabajo

Referencia: [/es/docs/ai](/es/docs/ai)

### Ruta C: Diagnosticar más rápido (Pro)

Abre LSP/Debug y:

- verifica diagnósticos
- aplica acciones de código
- inicia sesión de depuración e inspecciona variables/observación

Referencias: [/es/docs/lsp](/es/docs/lsp), [/es/docs/debug](/es/docs/debug)

## Escenarios de alto valor

1. Hotfix remoto en servidor similar a producción: `/es/docs/ssh` + `/es/docs/terminal` + `/es/docs/source-control`
2. Triage rápido de errores: `/es/docs/lsp` + `/es/docs/debug` + `/es/docs/timeline`
3. Automatización de tareas repetitivas: `/es/docs/tasks` + `/es/docs/ai`
4. Configuración diaria estable: `/es/docs/settings` + `/es/docs/configuration`

## Siguiente mejor paso

Después del primer uso, configura esto inmediatamente:

- Perfil de proveedor AI: [/es/docs/configuration](/es/docs/configuration)
- Preferencias de editor y teclado: [/es/docs/settings](/es/docs/settings)
