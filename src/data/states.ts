export type StateType = {
  name: string;
  code: string;
  content: string;
};

export const states = [
  {
    name: "Flächen gewinnen – oben und unten",
    code: "AZ",
    content:
      "Bauen auf mehreren Ebenen – im Untergrund und in der Höhe - ein Gewinn für Bayern." +
      "\n- " +
      "Bayern vergrößern: Vervielfachung der Nutzfläche durch Bauen im Untergrund und Etagenbauten nützt vor allem dort, wo Flächen knapp sind. Knapper Baugrund vor allem in urbanen Lagen der wichtigste Kostentreiber für Bauwerke." +
      "\n- " +
      "Beispiele: Deckelung und Überbauung von Verkehrsinfrastruktur; aufgeständerte PV-Flächen bieten Schatten, aufgeständerte Gebäude Parkplätzen, Straßen oder Bahnanlagen, Tiefgarage unter Gebäuden, Etagenbau für Wohnen, Gewerbe und Industrie." +
      "\n- " +
      "Clevere Bündelung ermöglicht Zusatznutzen: Abwärmenutzung: Gewächshäuser auf Fabrikanlagen Wohnnutzung über Handelsflächen: Nähe gewinnen, Verkehr vermeiden."
  },
  {
    name: "Flächenmobilisierung – mit Recht",
    code: "CO",
    content:
      "Öffnung in Vorschriften können Flächengewinn mehr Wirtschaftlichkeit ermöglichen." +
      "\n- " +
      "Aufstockungen per Bebauungsplan ermöglichen." +
      "\n- " +
      "Bauleitplanung auch grundsätzlich flexibilisieren: Internet, E-Mobilität, innovative Bauwerke und Nutzungen ermöglichen ein besseres räumliches Miteinander und Nebeneinander." +
      "\n- " +
      "Die clevere Bündelung verschiedener Nutzungen auf einer Fläche ermöglicht Synergie-Effekte Energiesparen – Abwärmenutzung vor Ort Mobilitätsbedarf senken." +
      "\n- " +
      "Spielräume für öffentliche Verwaltungen im Öffentlichen Bau für moderne, flächensparende Produkte der BAUINDUSTRIE öffnen (z.B. Serielles Bauen, Schlüsselfertigbau, Vorfertigung)."
  },
  {
    name: "Knowhow ermöglicht Bauen (fast) ohne Baustelle",
    code: "KS",
    content:
      "Vorfertigung und HighTech-Geräte reduzieren Belastungen dort, wo es besonders eng zugeht." +
      "\n- " +
      "Bauen mit vorgefertigten Elementen verkürzt die Bauphase auf u.U. wenige Tage und ermöglicht Bauen auch in beengten Lagen, z.B. in Innenstädten." +
      "\n- " +
      "moderne Baugeräte können Emissionen in sensiblen Lagen deutlich reduzieren." +
      "\n- " +
      "Kletterkrane können den Verkehrsflächenbedarf z.B. für die Montage Windenergieanlagen in Wäldern entscheidend reduzieren." +
      "\n- " +
      "Die Vergabe von Leistungskomplexen and die BAUINDUSTRIE – z.B. die schlüsselfertige Errichtung „aus einer Hand“ – ermöglicht auch die zuverlässige Taktung, entsprechend auch die Verkürzung temporärer Baustellenbelastungen für Mensch und Natur auf das technisch unvermeidbare Minimum."
  },
  {
    name:
      "Versiegelung muss nicht sein – Entsiegelung ist oft nicht schwer",
    code: "NV",
    content:
      "Technische Lösungen ermöglichen die Pufferung und Versickerung von Niederschlag vor Ort." +
      "\n- " +
      "Versickerungsanlagen und Pufferspeicher auf, in und unter Bauwerken: die BAUINDUSTRIE hat fertige Lösungen." +
      "\n- " +
      "Bayerns Kommunen können und müssen Schwammstädte werden. Die meisten größeren Städte sind historisch an Flüssen und in Überschwemmungsgebieten entstanden. Im Hochwasserschutz ist der faire Lastenausgleich zwischen Stadt und Land jetzt endlich technisch möglich." +
      "\n- " +
      "Zur Erarbeitung nachhaltiger Lösungen haben Freistaat und Kommunen alle Spielräume in der Hand. Die Wasserwirtschaftsämter und ihr Knowhow sind als zentrale Schaltstellen zwingend ins Bauministerium zu verlagern."
  },
  {
    name: "Simulationen können zur Mobilisierung von Bestandsflächen beitragen",
    code: "NM",
    content:
      "Digitale Werkzeuge können wertvolle Dienste leisten, um Betroffene zu Beteiligten zu machen." +
      "\n- " +
      "Widerstände von Anwohnern stehen dem Bauen im Bestand häufig entgegen. Manchmal muss man eine positive Zukunftsplanung plakativ vor Augen führen." +
      "\n- " +
      "Überzeugende Visualisierungen und Animationen können entscheidenden Beitrag leisten, die Akzeptanz für Planungen zu steigern und Betroffene in die Optimierung von Projekten aktiv einzubeziehen." +
      "\n- " +
      "Auf kommunaler wie auf Landesebene können Politik und Verwaltung die Chancen aktueller Modellierungswerkzeuge offensiv nutzen, um bei der Planung von Maßnahmen aus der Defensive herauszukommen: nicht auf die Klagen warten, sondern Bedenkenträgern proaktiv und überzeugungskräftig Wind aus den Segeln nehmen."
  },
  {
    name:
      "Grüne Fassaden und Dächer – Mehrwert für Mensch, Klima und Natur",
    code: "UT",
    content:
      "Mit Bauen ist ein Flächengewinn für Mensch, Klima und Natur möglich." +
      "\n- " +
      "Auch Fassaden und Dächer können für mehr Artenvielfalt und Natur, gesundes Stadtklima und Wohlbefinden der Menschen tun. Begrünte Dächer bis hin zu Gärten auf Dächern sind heute keine Utopie mehr. Fassaden und Dächer können das Aufheizen der Städte bremsen und dem Klimawandel aktiv begegnen." +
      "\n- " +
      "Auch eine nachträgliche „grüne Aufwertung“ von Einzelbauwerken und ganzen Quartieren muss sich für die Verantwortlichen (Investoren, Sachaufwandsträger, Bauverantwortliche etc.) rechnen: begrünte Gebäudeflächen sollten z.B. bei der Nutzflächenberechnung im Rahmen der Baugenehmigungsplanung positiv angerechnet werden."
  }
];
