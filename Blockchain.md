# Blockchain

* Registre distribué, de manière pair à pair sans autorité intermédiaire de contrôle ou de remédiation

- lire le white paper du bitcoin [https://bitcoin.org/bitcoin.pdf]

* Un système fiable et transparent est obligatoire pour que chacun examine, corrige ou contribue

* Comptabilité: double entry bookkepping => Suivre les débits et crédits des clients par le biais tiers de "confiance" mais cela n’empeche pas une altération, accident, bug ou personne malveillantes

* Comptabilité triple entry bookkepping => Signature de la transaction par l’émetteur par système cryptographique clé privée, clé publique. ensuite la banque de l’émetteur signe comme quoi elle valide la transaction si l’emetteur posséde bien les fonds, effectue le transfert et emet un reçu signé à l’emetteur et l’expediteur et garde également une copie

On ne peut plus tricher car si on consulte les registres depuis le début, on connait l’ensemble des transactions


livre mastering bitcoin => andreas antonopoulos

* systeme cryptographique => ECDSA sur bitcoin => cle privée, clé publique => On ne peut pas prédire les nombres premiers => fonction de hash pour transformer la clé publique en adresse 
clé privée => très grand nombre généré aléatoirement par un one way algorithm
la clé privée sert à generer une clé publique mais on ne peut pas revenir vers la clé privée
opération sur la courbe elliptique 
ECDSA permet de signer un message avec notre clé privée, il prend comme input notre clé privé et notre message.
Pour vérifier que l’on est bien l’auteur du message et de la signature associé, un destinataire peut effectuer une verif par un algo de verif elliptic curve signature recovery, pour recuperer la clé public grace au message et à la  signature.

Dans une blockchain l’utilisateur signe une transaction avant de l’envoyer au reseau.
le réseau reçoit la transac avac les infos suiv:
* l’adresse de l’utilisateur sur le reseau
* le message 
* le signature de ce message par ECDSA

Pour valider que l’expediteur est bien le proprietaire de l’adress, les noeuds du réseau vonst extraire la clef publique par un elliptic curve signatuer recovery, utiliser la fonction de hash qui permettde convertir une clef publiqe en adresse et vérifier que l’adresse de l’expediteur est bien identique à l’adresse recuperer par cette verification

* Hashing et merkle tree
les tx sont hashés dans un bloc => 2 blocs sont ensuite hashé dans un autre blocs supérieur => jusqu’a remonter au bloc root => toutes les transactions generée sont stockés dans le block header par le biais du bloc root => block header à un numéro et ensuite un autre block sera ajouté avec le hash du block header precedent.  
Modification d’une transaction => modifie l’ensemble des hash jusqu’au block header donc le bloc header ne sera plus valide.






