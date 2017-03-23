
function num(e) {
    evt = e ? e : event;
    tcl = (window.Event) ? evt.which : evt.keyCode;
    if ((tcl < 48 || tcl > 57) && (tcl != 8 && tcl != 0 && tcl != 46))
    {
        return false;
    }
    return true;
}



function resultado(){
var numeroEnCasilla = document.getElementById("mostrar");
var numero = numeroEnCasilla.value;

numeroEnCasilla.value = eval(numero);
};
function raizCuadrada(){
	var numero = document.getElementBy
	Math.Sqrt(numero)
}
