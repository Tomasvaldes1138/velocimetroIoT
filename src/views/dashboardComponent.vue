/* eslint-disable */
<template>
    <div class="container-fluid d-flex">

        <div class="col-md-3">
            <!-- Sidebar  -->
            <nav id="sidebar">
                <div class="sidebar-header">
                    <h3>Dashboard</h3>
                </div>

                <ul class="list-unstyled components">
                    <li>
                        <a href="#">Home</a>
                    </li>

                    <li>
                        <a @Click="this.cerrarSesion()" >Cerrar Sesión</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="data col-lg-6 align-items-center">
            <h2> Datos Actuales</h2>
            <div class="row my-5 text-start">
                <h4>Velocidad</h4>
                <div class="info border">
                    <p>{{velocidadValues }} m/s</p>
                </div>
            </div>
            <div class="row  my-5 text-start">
                <h4>Distancia Recorrida</h4>
                <div class="info border">
                    <p>{{ distRecorridaValues }}m</p>
                </div>
            </div>
            <div class="row  my-5 text-start">
                <h4>Velocidad máxima</h4>
                <div class="info border">
                    <p>{{ velocidadMaxima }}m/s</p>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'dashboardComponent',
    data() {
        return {
            distRecorridaValues: '',
            velocidadValues: '',
            velocidadMaxima: ''
        }
    },
        //No se ejecuta al iniciar el dashboard
        created() {
            const token = localStorage.getItem('token');
            const url='http://iot.ceisufro.cl:8080/api/plugins/telemetry/DEVICE/1e2a1770-0afe-11ee-b199-3d650e5455ce/values/timeseries'
            setInterval(() => this.getValues(url, token), 500);
        },
        methods: {
        getValues(url, token) {
            axios.get(url, {
                headers: {
                    'X-Authorization': 'Bearer ' + token
                }
            })
                .then(response => {
                    const data = response.data;
                    this.distRecorridaValues = data.distRecorrida[0].value;
                    this.velocidadValues = data.velocidad[0].value;
                    const floatVel=parseFloat(this.velocidadValues)
                    const floatVelMax=parseFloat(this.velocidadMaxima)
                    console.log(floatVel, floatVelMax)

                    if (this.velocidadMaxima){
                        if(floatVel>floatVelMax){
                            console.log(this.velocidadValues)
                            this.velocidadMaxima = this.velocidadValues;
                        }
                    }
                    else{
                        this.velocidadMaxima = data.velocidad[0].value;

                    }
                })
                .catch(error => {
                    console.error('Error al obtener los valores:', error.message);
                });

            },
            cerrarSesion(){
                localStorage.removeItem('token');
                this.$router.push('/');
            }
    }
}
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

body {
    font-family: 'Poppins', sans-serif;
    background: #fafafa;
}

.data {
    margin-top: 40px;
}

p {
    padding-top: 5%;
    padding-bottom: 4%;
}


.container-fluid a {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

a,
a:hover,
a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

.navbar {
    padding: 15px 10px;
    background: #fff;
    border: none;
    border-radius: 0;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
}



.col-md-3 {
    display: flex;
    align-items: stretch;
    height: 100vh;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    background: #7386D5;
    color: #fff;
    transition: all 0.3s;
}



#sidebar .sidebar-header {
    padding: 20px;
    background: #6d7fcc;
}

#sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #47748b;
}

#sidebar ul p {
    color: #fff;
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}

#sidebar ul li a:hover {
    color: #7386D5;
    background: #fff;
}

#sidebar ul li.active>a,
a[aria-expanded="true"] {
    color: #fff;
    background: #6d7fcc;
}



ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #6d7fcc;
}

ul.CTAs {
    padding: 20px;
}

ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
}

a.download {
    background: #fff;
    color: #7386D5;
}

a.article,
a.article:hover {
    background: #6d7fcc !important;
    color: #fff !important;
}


@media (max-width: 768px) {
    #sidebar {
        margin-left: -250px;
    }

    #sidebar.active {
        margin-left: 0;
    }

    #sidebarCollapse span {
        display: none;
    }
}
</style>

