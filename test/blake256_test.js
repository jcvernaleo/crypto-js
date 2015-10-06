// Test a few hashes to make sure all works properly.
// 10/06/2015
// jcv

process.env.NODE_ENV = "testing"

var expect = require('expect');
var C = require("../src/blake.js");

// Include tests from the Go blake256 library.
var input = new Array(
    'test\n',
    "The quick brown fox jumps over the lazy dog",
    "BLAKE",
    '',
    "'BLAKE wins SHA-3! Hooray!!!' (I have time machine)",
    "Go",
    "HELP! I'm trapped in hash!",
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congu"
);
var output = new Array(
    "e480f778466b93c6281c867c57e40ab8325c4b0aa22495bf00512946edc4d7f1",
    "7576698ee9cad30173080678e5965916adbb11cb5245d386bf1ffda1cb26c9d7",
    "07663e00cf96fbc136cf7b1ee099c95346ba3920893d18cc8851f22ee2e36aa6",
    "716f6e863f744b9ac22c97ec7b76ea5f5908bc5b2f67c61510bfc4751384ea7a",
    "18a393b4e62b1887a2edf79a5c5a5464daf5bbb976f4007bea16a73e4c1e198e",
    "fd7282ecc105ef201bb94663fc413db1b7696414682090015f17e309b835f1c2",
    "1e75db2a709081f853c2229b65fd1558540aa5e7bd17b04b9a4b31989effa711",
    "4181475cb0c22d58ae847e368e91b4669ea2d84bcd55dbf01fe24bae6571dd08",
    "af95fffc7768821b1e08866a2f9f66916762bfc9d71c4acb5fd515f31fd6785a"
);
for (i=0; i < input.length; i++) {
    var hash = C.BLAKE256(input[i]).toString()
    expect(hash).toEqual(output[i]);
}

