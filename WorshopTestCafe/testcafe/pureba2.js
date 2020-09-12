import { Selector } from 'testcafe';
import page from './pageModel';

fixture('Test con testcafe')
    .page ('https://devexpress.github.io/testcafe/example/');

//Primera prueba, escribir en la caja de texto
test('Escribir nombre del tester', async t => {
    await t
    .typeText(page.nameInput,'Tester')
    .expect(page.nameInput.value).eql('Tester')
});
    //segunda prueba, dar click en checbox
test('Dar click en un chacbkox', async t => {
    await t
    .click(page.checkboxTesting)
    .expect(page.checkboxTesting.checked).ok()
});

test('Click sobre radio button', async t =>{
    await t
    .click(page.radioButtonLinux)
    .expect(page.radioButtonLinux.checked).ok()
});

test('Probar como seleccionar un elemento de una lista', async t => {
    await t
    .click(page.lista)
    .click(page.javaScript)
    .expect(page.javaScript.exists).ok()
});

test('Probar dejar un comentario', async t =>{
    await t
    .click(page.checkboxTried)
    .typeText(page.textArea, 'Primera linea')
    .typeText(page.textArea, '\nSegunda linea')

    //Usuario cambio de opinion

    await t
    .selectTextAreaContent(page.textArea, 0,5)
    .pressKey('delete')
    .typeText(page.textArea, '\nTercera linea')

    await t
    .typeText(page.textArea, '\nCuerta linea')
    .typeText(page.textArea, "Reemplazamos todo esto", {renplace: true})

    .expect(page.textArea.value).eql('Reemplazamos todo esto')
});

//  Prueba Otra
test('Probar mover un slider', async t => {
    await t
        .click(page.checkboxTried)
        .expect(page.checkboxTried.checked).ok()

        .dragToElement(page.slider.handle, page.slider.tick.withText('9'))
});
