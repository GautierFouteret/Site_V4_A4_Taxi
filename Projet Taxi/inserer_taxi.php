<?php
if(isset($_POST['service']) && isset($_POST['quantite']))
    $service = $_POST['service'];
    $quantite = $_POST['quantite'];
    $id_salle = $_POST['id_salle'];
    $id_service = $_POST['id_service'];
    
    require_once('module_connexion-taxi.php');
    
    /* Connexion à la base de données test depuis le serveur avec le login utilisateur1
    et le mot de passe P@ssword */
    $User = "AdminTaxi";
    $Passwd="AdminTaxi";
    $dsn="mysql:host=localhost;dbname=taxi";
    try{
    $db = new PDO($dsn,$User,$Passwd);
    } catch(PDOException $e){
    echo "<P> La base de données n'est pas accessible ! </p>";
    }
    /* place des guillemets simples autour d'une chaîne d'entrée, si nécessaire et protège les caractères
    spéciaux présents dans la chaîne d'entrée, en utilisant le style de protection approprié au pilote
    courant. */
    $service= $db->quote($service);
    $quantite= $db->quote($quantite);
    /* Execution de la requête avec récupération du résultat dans la listeOperateur */
    $requete = "INSERT INTO `hville1`.`service` (`LIBELLE_SERVICE`)  VALUES (NULL, $service) ;";
    $requete1 = "INSERT INTO `hville1`.`compose` (`ID_SERVICE`, `ID_SALLE`, `QUANTITE`) VALUES ($id_service, $id_salle , $quantite);"; // quantité des ID salle et ID service a la place de NULL
    echo $requete;
    $res = $db->query($requete);
    if($res == false){
    echo "<P>requete echouée</p>";
    }
    $res1 = $db->query($requete1);
    if($res1 == false){
    echo "<P>requete echouée</p>";
    }
?> 