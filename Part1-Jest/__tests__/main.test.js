const formatVolumeIconPath = require('../assets/scripts/main');

describe('volumn level',()=>{
    test('is volumn level 3',()=>{
        expect(formatVolumeIconPath(67)).toEqual(`./assets/media/icons/volume-level-${3}.svg`);
    });
    test('is volumn level 2',()=>{
        expect(formatVolumeIconPath(34)).toEqual(`./assets/media/icons/volume-level-${2}.svg`);
    });
    test('is volumn level 1',()=>{
        expect(formatVolumeIconPath(3)).toEqual(`./assets/media/icons/volume-level-${1}.svg`);
    });
    test('is volumn level 0',()=>{
        expect(formatVolumeIconPath(0)).toEqual(`./assets/media/icons/volume-level-${0}.svg`);
    });
});