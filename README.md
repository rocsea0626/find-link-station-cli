> find-link-station-cli ; Find the most suitable link station for a device at given point [x,y].

## Installation

- zip file
```shell
unzip find-link-station-cli
cd find-link-station-cli
npm link
```
- github
```shell
git clone https://github.com/rocsea0626/find-link-station-cli.git
cd find-link-station-cli
npm link
```
## Quick Start

- Print the answer for given assignment
```shell
npm run assignment-answer
```

- Create a symlink in the global folder 
```shell
npm link
```

- Find the best link station for point (0,0) with link stations in "link-stations"
```shell
findstation -i link-stations -p 0,0
```
- Template for the source file of link stations
```shell
[
    [0, 0, 10],
    [20, 20, 5],
    [10, 0, 12]
]
```


## Usage

-   `findstation -i <file> -p 0,0` Find the best link station for point (0,0) with link stations defined in given file
-   `findstation -h` Print help
-   `npm run assignment-answer` Print the answer for given assignment
-   `npm test` Run all unit tests