import { Selector } from 'testcafe';

fixture`Getting Started`
    .page `https://devexpress.github.io/testcafe/example/`;

test('My First Test', async t =>{
    const pageTitle = Selector('h1');
    const paraGraph = Selector('p');
    const inputName = Selector('#developer-name');
    const submitButton = Selector('#submit-button');
    const checkBox = Selector('.column.col-1')
    //const checkBox = Selector('#parallel-testing-checkbox')
    .find('p')
    .withText('Running tests in background and/or in parallel in multiple browsers');
    const resultText = Selector('#article-header');
    const dropDown = Selector('#preferred-interface');
    const option = dropDown.find('option');
    const commentText = Selector('#comments');

    await t

    .expect((pageTitle).innerText).eql('Example')
    .expect((paraGraph).innerText).eql('This webpage is used as a sample in TestCafe tutorials.')
    .typeText(inputName, 'Fname Lname')
    .click(dropDown)
    .click(option.withText("Both"))
    .expect(dropDown.value).eql("Both")
    .expect(commentText.hasAttribute('disabled').ok())
    .click(submitButton)
    .expect((resultText).innerText).eql('Thank you, Fname Lname!');
})