function openEnvelope() {
    document.querySelector('.envelope-container').style.display = 'none';
    document.getElementById('message').style.display = 'block';
}

document.getElementById('whatsapp-button').addEventListener('click', function() {
    const message = encodeURIComponent('iya opetku sayang, tapi kirim dulu foto pap nya baru aku maafin😜😛♥♥');
    const phoneNumber = '6285762129895';
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
});
