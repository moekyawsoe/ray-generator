
## Installation

```sh
$ npm install -g ray-generator
```

## Quick Start

Create the app:

```bash
$ ray-generator --view=ejs myapp && cd myapp
```
With MySQL
```bash
$ ray-generator --view=ejs --db=mysql myapp && cd myapp
```
With Auth
```bash
$ ray-generator --view=ejs --db=mysql --auth=yes myapp && cd myapp
```

Install dependencies:

```bash
$ npm install
```

Start your Express.js app at `http://localhost:3010/`:

```bash
$ npm start
```

## Command Line Options

This generator can also be further configured with the following command line flags.

        --version        output the version number
    -e, --ejs            add ejs engine support
    -v, --view <engine>  add view <engine> support (ejs) (defaults to ejs)
        --no-view        use static html instead of view engine
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git            add .gitignore
    -f, --force          force on non-empty directory
    -h, --help           output usage information
    -d, --db <engine>    add database supports
    -a, --auth <yes/no>  auth flow demo function with sql

## License

[MIT](LICENSE)
