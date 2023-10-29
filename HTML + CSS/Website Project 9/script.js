let first = document.getElementById('flight-button');
let second = document.getElementById('hotel-button');
let third = document.getElementById('rental-button');
let flight = document.getElementById('flight');
let hotel = document.getElementById('hotel');
let rental = document.getElementById('rental');
let m1 = document.getElementById('m1')
let m2 = document.getElementById('m2')
let m3 = document.getElementById('m3')


function openFlight() {
    flight.style.display = 'inline-flex';
    hotel.style.display = 'none';
    rental.style.display = 'none';
    m1.style.color = 'white';
    m1.style.backgroundColor = '#ff5722';
    m2.style.backgroundColor = 'black';
    m3.style.backgroundColor = 'black';
}

function openHotel() {
    flight.style.display = 'none';
    hotel.style.display = 'inline-flex';
    rental.style.display = 'none';
    m2.style.color = 'white';
    m2.style.backgroundColor = '#ff5722';
    m1.style.backgroundColor = 'black';
    m3.style.backgroundColor = 'black';
}

function openRental() {
    flight.style.display = 'none';
    hotel.style.display = 'none';
    rental.style.display = 'inline-flex';
    m3.style.color = 'white';
    m3.style.backgroundColor = '#ff5722';
    m1.style.backgroundColor = 'black';
    m2.style.backgroundColor = 'black';
}