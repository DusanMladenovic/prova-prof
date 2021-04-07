// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000020300000000000000000004020202030000000000000000000000000000000000000000000000000000000000000000000004020202020203000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004020202020000000000000000000000000000000002020203000000000000000000000000000000000000000000000000000000000000000000000000040203000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles2,sprites.builtin.forestTiles22,sprites.builtin.forestTiles23,sprites.builtin.forestTiles21], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
