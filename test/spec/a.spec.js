/**
 * @file test
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        var a = require('a')

        describe('test', function () {
            it('a', function () {
                expect(a.name).toEqual('a');
            })
        });
    }
);
