


$('#F').on('change', function(ev) 
{
    var f = ev.target.files[0];
    var fr = new FileReader();
    
    fr.onload = function(ev2) {
        console.dir(ev2);
        $('#img_user').attr('src', ev2.target.result);
    };
    
    fr.readAsDataURL(f);
});