# 2. Git & GitHub

## Objetos

Git en su core funciona como un sistema de almacenamiento de clave-valor.

- **Clave:** hash sha1
- **Valor**: data

### blob

Pieza minima de contenido almacenado en Git.

Metadatos:

- Identificador del tipo de objeto
- Lenght del la data
- Delimitador
- Data

**12ef3**
| blob | 10 |
| --------- | --- |
| \\0 | |
| TheBridge | |

Git cuenta con algunos comandos de bajo nivel para trabajar con estos objetos.

### Example

1. `git init` inicializa un repo y nos da el path a `.git`
2. `git hash-object` genera el sha1 de la data. El sha1 se genera con la data con todos sus metadatos.

`echo 'TheBridge' | git hash-object --stdin`
`echo 'blob 10\0TheBridge' | openssl sha1`

3. El anterior extrae el calcula el hash pero no registra el objecto de tipo blob en el repositorio. Para ello se incluye la flag `-w`

`echo 'TheBridge' | git hash-object -w --stdin

### tree

¿Cómo sabe git el nombre del archivo y el arbol de directorios al que corresponde el blob?

Un objeto _tree_ contiene punteros usando sha1 a blobs o a otros trees

_Metadatos:_

- tipo de puntero (blob o tree)
- nombre del archivo o directorio
- modo (ejecutable o enlace simbolico)

**31cb3**
| tree | length | |
| ---- | ------ | ---------- |
| \\0 | | |
| blob | 13c5ce | file.md |
| tree | 3d51c1 | foldername |

**Git apunta el mismo blob para mismas piezas de contenido**

[Grafico](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)

### Commit

Los commits son otros tipos de objetos como blob y tree

Un commit contiene un puntero a un directorio o tree

Metadatos:

- author
- commiter
- date
- message
- parent commit (uno o varios (en el caso de fusiones))

El sha1 del commit es el hash de toda esta información

**4dcf13**
| commit | size |
| ------- | ------------ |
| tree | 12d121 |
| parent | 5d12d |
| author | Ana |
| message | "add navbar" |

El primer commit "first commit" no tiene un parent commit

El contenido de los objetos binarios que almacena git dentro de `.git/object` está comprimido

`cat .git/objects/40/e8fe6ebfca692b9f216122e1d7a173c8bce29d`

x��A
� @Ѯ=��
���~�c׾�ϕ6zÍ~��w���V^2�p�a����\�����W�dj3_�A�

Descomprimir este contenido:
`git cat-file -t 40e8fe6 
`git cat-file -p 40e8fe6

En git no se puede cambiar un commit, no podemos editarlo o corromperlo porque cambiaría el sha1. Incluso si copias todo el contenido tendrá una fecha diferente. Es un sistema de seguridad, si tienes un hash de un commit puedes estar seguro que el contenido no ha cambiado.

La eficiencia con la que git almacena los datos y sus algoritmos de compresión permiten alamacenar toda la historia del repositorio en nuestras máquinas locales. Es muy rápido consultar sucursales o desplegar cambios.

[Object](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)

## Areas

3 areas donde vive el código

### Working Area

También llamada working tree

Son los archivos untracked o nuevos cambios que no están en el staging area, que no están bajo el control de git, los que acaban de llegar a tu directorio local. Los archivos sin seguimiento.

Es el espacio cero donde puede agregar nuevo contenido, modificar, eliminar.

### Staging Area

También llamada cache o index.

Son los archivos que serán parte de tu próximo commit.
Es el mecanismo que usa git para saber lo que va a cambiar entre el commit actual y el siguiente.

un staging area limpia no está vacía aunque lo parece. Contiene los mismos archivos que estaban en el último commit.

`git ls-files -s`

El index o staging area es realmente un binario dentro de .git. Git detecta cuando cambia un archivo porque su sha1 cambia.

`git add` añade archivo al siguiente commit
`git rm` Elimina archivo del siguiente commit
`git mv` para cambiar el nombre o mover archivos en el propio commit

Cuando quitas un archivo del staging area no lo eliminas, estás remplazandolo con una copia del ultimo commit del repo. El staging area no está vacio.

### Repo

Contiene todos tus commits.

Un commits es una instantanea del staging area en el momento del commit

El repositorio se encuentra en el directorio `.git` y almacena el estado de estos archivos de forma segura para poder cambiarlos con garantía de poder volver a ellos si se necesita.

Preparamos un nuevo cambio para hacer commit:
`git add readme.md`

Hacemos el commit
`git commit`

##### Mensaje de commit

Los commits conservan la historia de la base de código.

Ayudan a:

- Depurar
- Solucionar problemas
- Informar de qué se introdujo en un punto de la historia si los mensajes de los commits osn buenos.
- Revisar pull request cuando son largos.
- Identificar en qué punto interesa revertir un proyecto.
- También ayudan a asociar el código con la numeración del sistemas de tickets externos usados por la organización.

Buen commit:

- Buen mensaje de commit
- Encapsulan una idea lógica
- No dejan el código roto.

[git-style-guide.md](https://gist.github.com/allamasln/f0f5f1d5c7903e4994218232d63b1314)

(Ejercicio 1)

## Referencias y Ramas

Las referencias son punteros a commits (tags, branches, head)

HEAD es un puntero especial que apunta a el commit actual pero también apunta a la rama actual (que es otra referencia). Apunta al commit que será el proximo padre.

```bash
cat .git/HEAD
cat .git/refs/heads/main
```

Una rama es un puntero a un commit que cambia al ultimo commit a medida que se van creando nuevos.

[branches](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)

## Stash

Usos

- Cambiar entre ramas a mitad del trabajo
- Si estás usando operaciones destructivas

`git stash`
`git stash save "nombre" `

`git stash list`
`git stash show stash@{0}`
`git stash apply`
`git stash apply stash@{0}`
`git stash --include-untracked`

Cuando se aplica un stash los archivos siguen en el mismo estado.

Crear una rama de un stash
`git stash branch 'brachname'`

Obtener un archivo de un stash (Operación destructiva, sobrescribe los cambios en el directorio de trabajo)
`git checkout stash filename`

Elimina el últim stash
`git stash drop stash@{n}`

Elimina todos los stash
`git stash clear`

(Ejercicio2)

## Ejercicio 1

1.  Crea una nueva carpeta e inicializa en ella un repositorio de git
2.  Crea un archivo `file.txt` con el contenido 'Hello world', añadelo al Staging Area y crea un commit.
3.  Crea una carpeta dentro del repositorio con el nombre `copia` y haz una copia del archivo creado en el paso 2 con el nombre `copia-file.txt`
4.  Insepecciona los objetos creados dentro del directorio `.git`.
5.  Usa `git cat-file` y localiza cada objeto (blob, tree y commit).

## Ejercicio 2

1.  Crea una nueva rama con el nombre `ejercicio2` en el repositorio del ejercicio uno
2.  Cambia la referencia de HEAD para que apunte a la nueva rama
3.  Mira los archivos `.git/HEAD` y `.git/refs/heads/*` e inspecciona a donde apuntan esas referencias (HEAD, nueva rama)
4.  Agrega una linea de contenido al fichero file.txt. Añade los cambios al staging area
5.  Crea un Stash los cambios.
6.  Elimina el directorio copia del staging area y registra un nuevo commit
7.  Aplica el alijo y registra otro commit
8.  Comprueba con `git log` los commits registrados.
