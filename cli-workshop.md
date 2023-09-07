# 1. Command Line

## GUI vs CLI

Ambas son interfaces de información pero están destinadas a usuarios diferentes y tienen propositos diferentes.

Antes de las GUI solo había CLI. Todo lo que se puede hacer con GUI se puede hacer con CLI.

### GUI

- Codifican un contexto que informa al usuario para que maximice la utilidad de la interface.
- Usa simbolos, lenguaje, jerarquia, etc.
- Logran que las máquinas sean más accesibles.

### CLI

- Actuan en una capa más cercana al kernel.
- Permiten hacer más operaciones. Muchas con más precisión y eficiencia.
- Exige más precision al usuario que es el responsable de conocer los comandos.
- Es universal, no se adapta a los código del usuario (lengua, cultura, etc.)
- No cambia con el tiempo.
- Más facilidad para automatizar tareas.

## REPL (Read Evaluate Print Loop)

Herramiemta para la programación interactiva.

    Un **shell** ejecuta comandos de uno en uno y devuelve resultados a cada uno de ellos.

```bash
echo Hola mundo
```

### ¿Shell?

Interprete de comandos que interactuar con aplicaciones o con el sistema operativo.

(bash, zsh, PowerShell, cmd.exe)

### Terminal

Es la ventana envoltoria donde se ejecuta el shell.

(iTerm2, Terminal de Windows)

Imprime el shell que se está ejecutando dentro:

```bash
echo $0
```

Cambia el shell:

```bash
bash
```

### Bash

#### Sistema de archivos

Siempre estás en una carpeta del sistema de archivos del dispositivo.

Ruta del directorio actual de trabajo:

```bash
pwd
```

- El _path_ es la ruta hacia un recurso o directorio del sistema.
- `/` representa un nivel de anidamiento dentro de una carpeta.

#### Navegar

Cambia el directorio de trabajo al directorio raiz:

```bash
cd /
```

Lista el contenido del directorio actual

```bash
ls
```

Cada usuario del sistema tiene su propio directorio.

Referencias especiales a directorios:

- `~` es una referencia que apunta al directorio del usuario
- `.`directorio actual
- `..` directorio superior o padre del actual

```bash
cd ~
```

```bash
cd ../..
```

#### Comandos, argumentos y flags

##### Comandos

Los comandos son ejecuciones de **programas** CLI del sistema.

Imprime el path donde está almacenado el programa cd:

```bash
which cd
```

##### Argumentos

Se pueden pasar **argumentos** a algunos programas para cambiar su ejecución:

Lista el contenido del directorio raiz. (`/` )

```bash
ls /
```

Abre el directorio actual con visual code (`.`):

```bash
code .
```

##### Flags

Las **flags** son otra forma de cambiar la ejecución de un programa. Prefijo `-` o `--`.

Lista el contenido de un directorio con detalle ( `-l`)

```bash
ls -l
```

Lista el contenido de un directorio con detalle y sus items ocultos (`-a`)

```bash
ls -l -a
```

Algunos programas permiten combinar flags

```bash
ls -la
```

Por convención agunos programas incluyen la flag `--help` para consultar las opciones disponibles.

```bash
git --help
```

Version de un programa cli instalado:

```bash
git --version
```

Algunas flags también pueden aceptar argumentos con `--flag=arg` o `--flag arg`

#### Archivos y directorios

##### Ver contenido de un archivo

- cat: Envía a la salida el contenido de un archivo. (lo imprime en la terminal)

```bash
cat file.txt
```

- less: (paginado)
  - `q` salir
  - `/` buscar (`n` siguiente `N` anterior coincidencia)
  - Lo usa git por defecto para mostrar información

**TIP**S:

- Finalziación de paths, comandos, etc. con `TAB`
- `clear` limpia la terminal

##### Crear

Crear directorio:

```bash
mkdir project
```

Crear archivo dentro de la nueva carpeta:

```bash
touch project/README.md
```

(Ejercicio 1)

## Ejercicio 1 (10 min)

1. Comprueba que estás usando el shell bash
2. Comprueba que estás en el directorio de tu usuario. Si no es así colócate en él.
3. Imprime por pantalla `Hola user`
4. Crea una carpeta con el nombre `ejercicio1` en tu directorio de usuario
5. Navega dentro de la nueva carpeta
6. Imprime por pantalla el path donde se encuentar el fichero con el código fuente del programa `cd`
7. imprime por pantalla el código fuente del programa `cd`
8. Sin salir de `ejercicio1`, imprime todos los archivos y carpetas que contiene tu directorio de usuario. Ocultos incluidos.

##### Eliminar

El comando `rm` borra de forma **definitiva** archivos y directorios.

Borra archivo:

```bash
rm file.txt
```

Borra directorio y todo lo que contiene

```bash
rm -rf folder
```

**Nunca ejecutar `rm -rf /`**

##### Copiar

Copiar un archivo dentro de la carpeta vscode:

```bash
cp file.txt ~/config/vscode/
```

Copiar un archivo dentro de la carpeta vscode y cambia su nombre:

```bash
cp file.txt ~/config/vscode/code.txt
```

Copiar carpeta carpeta vscode al directorio actual

```bash
cp -R ~/config/vscode .
```

Copiar carpeta carpeta vscode al directorio actual y la renombra

```bash
cp -R ~/config/vscode vscode-config
```

##### Mover y/o renombrar

Para mover o renombrar se usa `mv` y funciona igual para archivos y directorios.

- mv originPath targetPath

Renombra la carpeta vscode-config a vscode

```bash
mv vscode-config vscode
```

Mueve el archivo readme.md dentro del directorio vscode

```bash
mv readme.md vscode/
```

##### Editores para terminal

Algunos:

- nano
- vi
- vim
- emacs

```bash
vim test.txt
```

##### vim

Modos : Normal, Inserción, Comando, Visual

- `ESC` para entrar en modo comando:
  - `:q` para salir
  - `:q!` salir descartando cambios no guardados
  - `:w` guardar cambios
  - `:wq` guardar y salir
- `hjkl` desplazar el cursor
- `i` modo inserción
- `v` modo visual para hacer selecciones

#### Pipes y Streams

Las entradas y salidas son streams o flujos de datos. Y podemos desconectar y conectar (Redireccionar) flujos para estas entradas y salidas.

##### Streams

- Entrada estanda: Es la entrada de un programa
- Salida estandar: Por defecto es la pantalla adel terminal
- Salida error:

##### Redireccionar

Redirección salida err
`cat pruebas 2 > err.log`

Redirección salida std

`cat prueba 1> salidastd.log`

###### Ficheros

Redirecciona la salida estandar para echo al fichero log.txt

```bash
echo "Contenido carpeta" >> log.txt
```

Agregar salida estandar al fichero:

```bash
ls >> log.txt
```

##### A entrada de otros programas (Pipes)

Muestra los archivos y directorios que contienen 'test' en su nombre

```bash
ls | grep test
```

## Extra resources

- [Command Line Cheat Sheet](https://www.git-tower.com/blog/command-line-cheat-sheet/)
- [Cheat Sheet for Mac](https://github.com/0nn0/terminal-mac-cheatsheet)]

## Ejercicio 2 (10 min)

1. Crea una carpeta con el nombre `ejercicio2` en tu directorio de usuario
2. Crea un archivo vacío con nombre `file1.txt`
3. Abre el archivo usando el editor vim y escribe tu nombre. Guarda y sal de vim
4. Imprime en pantalla el contenido del nuevo archivo
5. Haz una copia del archivo en el mismo directorio con nombre `file2.txt`
6. Crea otro directorio con nombre `ejercicios` en tu directorio de usuario
7. Mueve los directorios `ejercicio1` y `ejercicio2` dentro
8. Crea un archivo llamado `log.txt` dentro `ejercicio1` con la lista de los archivos y directorios de tu directorio de usuario. ( `>` )
9. Imprime en la terminal el contenido del archivo `log.txt`
10. Cambia el nombre del directorio `ejercicios` a `ejercicios-bash`
11. Elimina la carpeta `ejercicios-bash` completa
