describe.skip('Description of tes suite', () => {
    before(()=>{
        console.log('Runs before individual test 1');
    });
    after(()=>{
        console.log('Runs after individual test 2');
    });

    it('Individual test 1', () => {
        console.log("Execute code: Individual test 1");
    });
    it('Individual test 2', () => {
        console.log("Execute code: Individual test 2");
    });
});