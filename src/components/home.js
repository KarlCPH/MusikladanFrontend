import React from "react";
import "../custom.scss"
import background from "../images/angryimg.png"
import { Carousel, Card, Button } from "react-bootstrap"
import testImg from "../images/musikladan_Caru.jpeg"

const Feed = React.memo((props) => {
    React.useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=your-app-id&autoLogAppEvents=1";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <React.Fragment>
            <div id="fb-root"></div>
            <div
                class="fb-page"
                data-href="https://www.facebook.com/musikladan/"
                data-tabs="timeline"
                data-width=""
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
            >
                <blockquote
                    cite="https://www.facebook.com/musikladan/"
                    class="fb-xfbml-parse-ignore"
                >
                    <a href="https://www.facebook.com/musikladan/">Your Page</a>
                </blockquote>
            </div>
        </React.Fragment>
    );
});

const styles = {
    
    cardImage: {
        objectFit: 'cover',
        
        width: '100vw',
        height: '30vh'

    },

    cardColor: {
        backgroundColor: "rgba(245, 245, 245, 0.4)"

    }
}


function Home() {
    return (
        <div className="font-face-gm">
            <div>
                <Card className="bg-dark text-white">
                    <Card.Img src={testImg} style={styles.cardImage} alt="Card image" />

                </Card>

            </div>
            <Card className="text-left" style={styles.cardColor}>
                
                <Card.Body>
                    <Card.Title className="text-center"><h1>Välkommen till Musiklådan</h1></Card.Title>
                    <Card.Body>
                    Musiklådan är en icke-kommunal skola i Gottsunda med ca 140 elever. Skolan drivs sedan 1994 av en föräldraförening i nära samarbete med personalen.
Musiklådan är en liten skola där all personal känner alla barn, en bra förutsättning för en trygg skola. Skolan har en klass i varje årskurs från förskoleklass till årskurs 6. Läsåret 2018/19 startade IBIS-programmet i samarbete med Uppsala universitet, för att skapa positiva lärmiljöer.
För att gynna barnens inlärning och utveckling satsar vi lite extra på de praktisk-estetiska ämnena. På Musiklådan har vi rörelsepass på schemat varje dag samt småslöjd i åk 1 och 2. I lågstadiet får eleverna musik i halvklass varje vecka, förutom den ordinarie musiklektionen. Eleverna i åk 6 har möjlighet att lära sig spela gitarr. Kulturtemat för året mynnar ut i en Vårshow.

<p></p>

<h2>Föräldraförening</h2>
Skolan är föräldradriven och har man barn på skolan kan man bli medlem i föräldraföreningen. Medlemsavgiften på 100 kr går till uteleksaker (Bg 5918-9969). Har du frågor om föreningen, tag kontakt med ordförande Ljiljana Gubeljic, styrelsen@musikladan.

<p></p>

<h2>Tema IBIS</h2>
Läsåret 2021/22 fortsätter FOSAM-projektet sitt tredje läsår. Det är ett samarbete mellan Uppsala Universitet och Uppsala kommun, där Musiklådan är en av de medverkande skolorna. IBIS (Inkluderande beteendestöd i skolan) har som mål att skapa positiva lärmiljöer. Detta läsår fortsätter arbetet bl a med tydliggjorda regler för klassrum, matsal, korridorer och skolgård.
                    </Card.Body>
                    
                </Card.Body>
                
            </Card>
            
        </div>
    );
}

export default Home;