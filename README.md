> find-link-station-cli ; Find the most suitable link station for a device at given point [x,y].

## Installation from .zip file

```shell
unzip find-link-station-cli
cd find-link-station-cli
```

## Usage

-   `node cli -i <file> -p 0,0` Find the best link station for point (0,0) with link stations defined in given file
-   `node cli -h` Print help
-   `npm run assignment-answer` Print the answer for given assignment
-   `npm test` Run all unit tests

## Sample usage

```shell
# Find the best link station for point (0,0) with link stations in "link-stations"
node cli -i link-stations -p 0,0

# Print the answer for given assignment
npm run assignment-answer

# Template for link stations source file
[
    [0, 0, 10],
    [20, 20, 5],
    [10, 0, 12]
]
```
