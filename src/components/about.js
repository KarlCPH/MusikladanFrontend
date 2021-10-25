import React from "react";
import "../custom.scss"
import { Carousel, Card, Button } from "react-bootstrap"

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


function About() {
    return (
        <div class="container" className="font-face-gm" 
        >
            <div class="scrollable">
                <Card class="scrollable" style={styles.cardColor}>
                    <Card.Header><h1>Musiklådan är en friskola – vad innebär det?</h1></Card.Header>
                    <Card.Body>
                    <div style={{
                        overflow: 'auto',
                        height: '750px'}}>
                    
                <p>En friskola drivs av en annan huvudman än en kommun eller ett landsting. Det kan vara en stiftelse, ett vinstdrivande företag eller en ideell förening, som i Musiklådans fall. Fristående skolor finansieras av kommunala bidrag (skolpeng) och får inte ta ut avgifter. Läsåret 20/21 var andelen elever i friståendeskolor 15.7% av alla skolor i Sverige friskolor.</p>

                <h1>Välkommen till Musiklådan</h1>
                <p class="boxed"> Musiklådan är en icke kommunal skola med cirka 140 elever som drivs utan vinstsyfte av en föräldraförening i nära samarbete med de anställda. Genom arbetet för skolan och dess utveckling har god gemenskap och omsorg skapats i skolan. Personaltätheten är hög både i skolan och på fritids. Vi har elevinflytande via klass- och elevråd och kamratombud.</p>
                <p class="boxed"><h2>Skolan</h2> Musiklådan har en klass i varje årskurs från förskoleklass till åk 6. I F-3 arbetar vi ofta i halvklass. Läsåret 2018/19 startade IBIS-programmet i samarbete med Uppsala universitet, för att skapa positiva lärmiljöer. Detta läsår fortsätter arbetet bl a med tydliggjorda regler för klassrum, matsal, korridorer och skolgård.</p>
                <p class="boxed"><h2>Fritidsverksamhet</h2> Fritids finns i skolan med två avdelningar, en för förskoleklassen och åk 1 och en för åk 2-6. Undervisningen kompletterar förskoleklassen och skolan, samt lyfter fram skapande processer, där eleverna bland mycket annat ges förutsättningar att utveckla förmågor som problemlösning demokratiskt och empatiskt förhållningssätt, skapande genom olika estetiska uttrycksformer samt allsidig rörelse.</p>
                <p class="boxed"><h2>Naturen</h2>Naturen ligger alldeles inpå knuten. Skog och äng omgärdar skolan. Gula stigen ligger ett stenkast bort, liksom det härliga strövområdet Gipen.</p>
                <p class="boxed"><h2>Musiklådan är:</h2><li>en skola nära hem, kamrater och natur</li>
                    <li>en liten skola där all personal känner barnen, en bra förutsättning för trygghet och arbetsro</li>
                    <li>en skola med allsidig, stimulerande och utvecklande lärmiljö</li>
                    <li>en skola nära hem, kamrater och natur</li></p>
                <p class="boxed"><h2>Vill du att ditt barn skall gå på Musiklådan?</h2>Vid antagningen till skolan sker urvalet enligt följande principer när man söker i rätt tid via eBarnUngdom och anger Musiklådan som förstahandsval:
                    <li>syskon till barn i skolan har företräde</li>
                    <li>barn i närområdet har företräde framför barn utanför detta</li>
                    <li>kötid</li>
                </p>
                <p>Anmälan sker via eBarnUngdom/Mittskolval under de perioder som anges på Uppsala kommuns hemsida. 
Maila gärna om ni har några frågor eller vill ha ytterligare information till rektor@musikladan.se.</p>
                    </div>
                    </Card.Body>
                </Card>
                
            </div>
        </div>
    );
}

export default About;