
function talkExpert() {
  const message = encodeURIComponent("Hello, Arthur! I'm from Machinery!");
  const whatsappLink = `https://wa.me/5547991840397/?text=${message}`;

  window.open(whatsappLink);
}

export default talkExpert;
