 
    let cardDiv = document.querySelector('.cardBody');
    let imgshow = document.querySelector('#imgshow');
    let imgshadow = document.querySelector('#imgshadow');
    let titlecheck = document.querySelector('#title');
    let textcheck = document.querySelector('#text');
    let buttoncheck = document.querySelector('#button');
    let colorpicker = document.querySelector('#colorpicker');
    let cardHeader = document.querySelector('#cardHeader');
    let cardFooter = document.querySelector('#footerId');
    let centerCheck = document.querySelector('#centerId');
    let borderCheck = document.querySelector('#borderId');
    let resetBtn = document.querySelector('.reset');
    let copy = document.querySelector('#copyBtn');

    colorpicker.addEventListener('input', color);
    let options = {
      "indent": "auto",
      "indent-spaces": 2,
      "wrap": 80,
      "markup": true,
      "output-xml": false,
      "numeric-entities": true,
      "quote-marks": true,
      "quote-nbsp": false,
      "show-body-only": true,
      "quote-ampersand": false,
      "break-before-br": true,
      "uppercase-tags": false,
      "uppercase-attributes": false,
      // "drop-font-tags":true,
      "tidy-mark": false
    }
    function sourceCode() {

      let contents = document.getElementById("cardBody").outerHTML;
      contents = tidy_html5(contents, options);
      contents = contents.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
      document.getElementById("sourceCode").innerHTML = contents;
    }
    function color(e) {

      let cardcolor = document.querySelector('.cardBody');
      cardcolor.style.backgroundColor = e.srcElement.value;

    }
    imgshow.addEventListener('click', showimage);
    imgshadow.addEventListener('click', shadowimage);
    titlecheck.addEventListener('click', title);
    textcheck.addEventListener('click', text);
    buttoncheck.addEventListener('click', button);
    cardHeader.addEventListener('click', headerFunction);
    cardFooter.addEventListener('click', footerFunction);
    centerCheck.addEventListener('click', centerFunction);
    borderCheck.addEventListener('click', borderFunction);
    copy.addEventListener('click', copyFunction);
    resetBtn.addEventListener('click', function () {
      location.reload();
    });

    function copyFunction() {
      let copyText = document.getElementById("sourceCode");

      copyText = copyText.innerHTML;


      copyText = copyText.replaceAll("&lt;", "<").replaceAll("&gt;", ">");

      navigator.clipboard.writeText(copyText);

    }
    function centerFunction(e) {
      if (e.srcElement.checked) {
        cardDiv.classList.toggle('text-center');
      }
      else {
        cardDiv.classList.toggle('text-center');
      }
      sourceCode();
    }
    function borderFunction(e) {
      if (e.srcElement.checked) {
        cardDiv.classList.toggle('border');
        cardDiv.classList.toggle('border-success');
      }
      else {
        cardDiv.classList.toggle('border');
        cardDiv.classList.toggle('border-success');
      }
      sourceCode();
    }
    function footerFunction(e) {
      if (e.srcElement.checked) {
        let footerDiv = document.createElement('div');
        footerDiv.className = 'card-footer';
        let footerTitle = document.createElement('h3');
        footerDiv.innerHTML = "This is footer";
        footerDiv.appendChild(footerTitle);
        cardDiv.appendChild(footerDiv);
      }
      else {
        document.querySelector('.card-footer').remove();
      }
      sourceCode();
    }


    function headerFunction(e) {
      if (e.srcElement.checked) {
        let header = document.createElement('div');
        header.className = 'card-header';
        let headerTitle = document.createElement('h3');
        headerTitle.innerHTML = "This is header";
        header.appendChild(headerTitle);
        cardDiv.insertBefore(header, cardDiv.children[0]);

      }
      else {
        document.querySelector('.card-header').remove();
      }
      sourceCode();
    }
    function showimage(e) {
      if (e.srcElement.checked) {
        // let cart=document.querySelector('#cart');
        let imgtag = document.createElement('img');
        imgtag.src = 'cartImage.jpg';
        imgtag.id = 'image';
        imgtag.className = 'img-fluid w-100';

        let imagediv = document.querySelector('.imgdiv');
        imagediv.insertBefore(imgtag, imagediv.children[0]);
      }
      else {
        let imageElement = document.querySelector('#image');
        imageElement.remove();
      }
      sourceCode();


    }
    function shadowimage() {
      let shadow = document.querySelector('#image');
      shadow.classList.toggle('shadow');
    }
    function title(e) {
      if (e.srcElement.checked) {

        let title = document.createElement('h5');
        title.innerHTML = "Card Title";
        title.className = 'card-title';

        let list = document.querySelector('.card-body');
        list.insertBefore(title, list.children[0]);

      }
      else {

        document.querySelector('.card-title').remove();


      }
      sourceCode();
    }
    function text(e) {
      if (e.srcElement.checked) {
        let text = document.createElement('p');
        text.innerHTML = "Some quick example text to build on the card title and make up the bulk of the card's content";
        text.className = 'card-text';

        let list = document.querySelector('.card-body');
        list.insertBefore(text, list.children[1]);

      }

      else {
        document.querySelector('.card-text').remove();

      }
      sourceCode();
    }
    function button(e) {
      if (e.srcElement.checked) {

        let btn = document.createElement('button');
        btn.innerHTML = "Submit";
        btn.className = 'btn btn-primary submitbtn shadow';
        let list = document.querySelector('.card-body');
        list.insertBefore(btn, list.children[2]);
      }
      else {
        document.querySelector('.submitbtn').remove();

      }
      sourceCode();
    }
 