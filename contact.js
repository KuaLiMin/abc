$(document).on('click', '.option', function(){
    location.href="mailto:ventingspaces@gmail.com?subject=Contact%3A%20"+escape($(this).text())+"&body=%23%20Write%20your%20message%20here%20and%20click%20send%2C%20we'll%20get%20back%20to%20you%20soon!%20%23%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A"
})