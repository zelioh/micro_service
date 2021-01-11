class Navbar extends React.Component
{
    render()
    {
        return (
            <nav class="navbar navbar-expand-lg">
                <h1 class="navbar-brand">AMAZOFF</h1>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/index.html">Accueil <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/account.html">compte</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Catégorie
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Musique</a>
                            <a class="dropdown-item" href="#">Cuisine</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">( ͡° ͜ʖ ͡°)</a>
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Chercher un produit" aria-label="Search"></input>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Chercher</button>
                    </form>
                </div>
            </nav>
            );
    }
}

class Body extends React.Component
{
    render()
    {
        var link = "/itm.html?v=" + this.props.id;
        return (
            <div class="card mb-4">
                <img class="card-img-top" src={this.props.thumbnail} alt="Card image cap"></img>
                <div class="card-body">
                    <h5 class="card-title">{this.props.name}​​</h5>
                    <p class="card-text"><strong>Prix : </strong>{this.props.price/100}</p>
                    <div class="d-flex justify-content-around align-items-center">
                        <a class="btn btn-outline-primary" href={link}>ACHETER</a>
                    </div>
                </div>
            </div>
        );
    }
}

class Footer extends React.Component
{

    render()
    {
        return (
            <footer class="mainfooter" role="contentinfo">
                <div class="footer-middle">
                <div class="container">
                    <div class="row">
                    <div class="col-md-3 col-sm-6">

                        <div class="footer-pad">
                        <h4>Paiement</h4>
                        <ul class="list-unstyled">
                            <li><a href="#">PayPal</a></li>
                            <li><a href="#">Carte Bleue</a></li>
                            <li><a href="#">Codes</a></li>
                            <li><a href="#">Cryptomonnaies</a></li>
                            <li><a href="#">Autre</a></li>
                        </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">

                        <div class="footer-pad">
                        <h4>À propos</h4>
                        <ul class="list-unstyled">
                            <li><a href="#">Tuto site</a></li>
                            <li><a href="#">Accessibilité</a></li>
                            <li><a href="#">Mentions légales</a></li>
                            <li><a href="#">Vos données</a></li>
                            <li><a href="#">Nous contacter</a></li>
                        </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">

                        <div class="footer-pad">
                        <h4>Partenaires</h4>
                        <ul class="list-unstyled">
                            <li><a href="#">Uno</a></li>
                            <li><a href="#">Audio Technica</a></li>
                            <li><a href="#">Hasmodee</a></li>
                            <li>
                            <a href="#"></a>
                            </li>
                        </ul>
                        </div>
                    </div>
                        <div class="col-md-3">
                            <h4>Suivez-nous !</h4>
                            <ul class="social-network social-circle">
                            <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#" class="icoTwitter" title="Twitter"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#" class="icoInstagram" title="Instagram"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="#" class="icoPinterest" title="Pinterest"><i class="fa fa-pinterest"></i></a></li>
                            </ul>				
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 copy">
                            <p class="text-center">&copy; Copyright 2020 - AMAZOFF, tous droits réservés</p>
                        </div>
                    </div>


                </div>
                </div>
                </footer>
            );
    }
}

function ol(argument) {
    console.log("loading components");
    loadNavbar();
    loadBody();  
    loadFooter();
    console.log("components loaded");
}

function navfoo(argument) {
    console.log("loading components");
    loadNavbar();
    loadFooter();
    console.log("components loaded");
}

function loadNavbar() {
    ReactDOM.render(
        <Navbar />,
        document.getElementById('navbar')
        );
}

function loadBody(f) {

    fetch('https://55dald7ea1.execute-api.eu-west-3.amazonaws.com/dev/get-articles')
    .then(response => response.json())
    .then((json) => {
        for (var i = 0; i < json.length; i++) {
            var tmp = document.createElement("div");
            tmp.id = i;
            tmp.classList.add('col-md-4');
            document.getElementById('body').appendChild(tmp)
        }
        for (var z = 0; z < json.length; z++) {
            ReactDOM.render(
                <Body id={z} name={json[z].Name} price={json[z].Price} thumbnail={json[z].Thumbnail}/>,
                document.getElementById(z)
                );            
        }
    });
}

function loadFooter() {
    ReactDOM.render(
        <Footer/>,
        document.getElementById('footer')
        );
}
