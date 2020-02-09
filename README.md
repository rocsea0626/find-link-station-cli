#find-link-station-cli
> Find the most suitable link station for a device at given point [x,y].

## Installation

- from zip file
```shell
unzip find-link-station-cli.zip
```
- from github
```shell
git clone https://github.com/rocsea0626/find-link-station-cli.git
```


## Quick Start
- Create a symlink in the global folder 
```shell
cd find-link-station-cli
npm install
npm link
```

- Print the answer for given assignment
```shell
npm run assignment-answer
```

- Find the best link station for point (0,0) from sample link stations in "link-stations.json"
```shell
findstation -i link-stations.json -p 0,0
```

- Find the best link station for point (0,0) from custom "my-link-stations.json"
```shell
# Create source input file for link stations
touch my-link-statinos.json

# Insert a 2-dimensional array in such format, [x, y, r]
[
    [0, 0, 10],
    [20, 20, 5],
    [10, 0, 12]
]

# Run command
findstation -i my-link-stations.json -p 0,0
```


## Usage

-   `findstation -i <file> -p 0,0` Find the best link station for point (0,0) with link stations defined in given file
-   `findstation -h` Print help
-   `npm run assignment-answer` Print the answer for given assignment
-   `npm test` Run all unit tests
-   Template for .json file of link stations, each link station is defined as [x, y, r]
```shell
[
    [0, 0, 10],
    [20, 20, 5],
    [10, 0, 12]
]
```