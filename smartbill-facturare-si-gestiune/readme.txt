=== SmartBill Facturare si Gestiune ===
Requires at least: 4.7.0
Tested up to: 6.7.0
Stable tag: 3.3.9
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html


Legatura ta cu SmartBill Facturare/Gestiune - facturare comenzi, scadere din gestiune, sincronizare stocuri.

== Description ==

SmartBill este cel mai folosit soft de facturare si gestiune din Romania.

Cu ajutorul modulului SmartBill elimini munca manuala, scumpa si ineficienta. 

= Ce iti ofera modulul SmartBill =

* emiterea facturilor in SmartBill direct din magazinul online
* emiterea automata a facturilor in SmartBill la modificarea statusului comenzilor
* emiterea facturilor cu status incasat, cand plata a fost facuta prin modulul Netopia Payments sau WooCommerce Stripe Gateway
* emiterea facturilor intr-o limba straina
* emiterea cu CIF intracomunitar
* [sincronizarea stocului magazinului online cu cel din SmartBill](https://ajutorgestiune.smartbill.ro/article/822-sincronizarea-stocurilor-cu-magazinul-online)
* trimiterea facturii pe email clientului automat dupa facturare
* afisarea facturii in contul clientului

Modulul este compatibil doar cu functionalitatea de baza WooCommerce si nu garantam functionarea acestuia impreuna cu alte module.


== Installation ==

= Cerinte minime = 
* PHP 7.2
* MySQL 5.6
* Woocommerce 3.0

= Instalare automata =
Instalarea automata este cea mai usoara optiune - WordPress se va ocupa de transferul fisierelor.

= Instalare manuala =
Instalarea manuala presupune descarcarea modulului, urcarea lui prin meniul Plugins/Module si activarea lui. 



== FAQ ==
= Am nevoie de un cont SmartBill pentru a utiliza modulul? =
Modulul poate fi utilizat doar in cadrul pachetelor Platinum (facturare), Gestiune Plus (facturare si gestiune) si eCommerce.

= Cum pot testa facturarea? =
Dupa prima configurare a modulului recomandam activarea optiunii “Emite ciorna“ din setarile pluginului. Astfel, in SmartBill, facturilor emise pe baza comenzilor nu li se va aloca un numar si se va putea verifica daca totalul comenzii este acelasi cu totalul facturii.

= Pe cine contactez daca am nevoie de ajutor? =
Te rugam sa ne contactezi la plugins@smartbill.ro.

== Changelog ==

= 3.4.2 =
* Add - Compatibilitate cu WooCommerce 9.9.5
* Fix - Corecteaza preluarea cotelor de TVA
* Add - Adaugarea mesajelor de eroare in notele comenzii cand factura este emisa manual

= 3.3.9 =
* Fix - Modifica verificari setare "Verificare localitate la checkout pentru clientii din Bucuresti"

= 3.3.8 =
* Add - Adaugare configurare noua: Verificare localitate la checkout pentru clientii din Bucuresti
* Add - Compatibilitate cu WooCommerce 9.7.0

= 3.3.7 =
* Add - Posibilitate adaugare camp CNP pe checkout

= 3.3.6 =
* Fix - Corectii la libraria SweetAlert pentru a preveni conflicte

= 3.3.5 =
* Fix - Corectii la calcularea discountului pe produs 

= 3.3.2 =
* Fix - Corectii la calcularea discounturilor si cupoanelor

= 3.2.6 =
* Fix - Corectie calcul discount cand valoarea produsului e mai mica decat cea a discountului

= 3.2.5 =
* Fix - Excluderea produselor gratuite din calculul discountului pe produs (order item) la verificarea discountului de pe produsul din comanda

= 3.2.4 =
* Add - Actualizare libarie notificari 

= 3.2.3 =
* Add - Compatibilitate cu WooCommerce 8.7
* Fix - Corectii la calcularea discounturilor procentuale

= 3.2.1 =
* Add - Reducerile nu mai includ TVA daca taxele din woocommerce sunt active
* Add - Reducerile de pe comanda vor fi incluse pe cupon daca exista cupoane in comanda
* Add - Cupoanele nu vor mai fi calculate diferit daca exista doar o cota TVA pe comanda

= 3.2.0 =
* Fix - Corectii la calculul discounturilor
* Fix - Corectii la verificarea CIF-urilor clientilor cu ANAF

= 3.1.10 =
* Fix - Corectii la salvarea pretului de pe comanda

= 3.1.9 =
* Add - Compatibilitate cu WooCommerce 8.6
* Fix - Preluarea pretului corect atunci cand el se modifica manual din comanda
* Add - Eliminarea discounturilor cu valoare 0 de pe factura 
* Fix - Alte imbunatatiri minore

= 3.1.8 =
* Add - Compatibilitate cu WooCommerce 8.5
* Add - Posibilitatea preluarii denumirii transportului din WooCommerce pe factura
* Fix - Corectie la facturarea pe persoana juridica
* Fix - Alte imbunatatiri minore

= 3.1.7 =
* Add - Corectie configurari cand taxele sunt activate
* Add - Compatibilitate cu WooCommerce 8.4

= 3.1.6 =
* Fix - Corectie la facturarea unei comenzi cu reducere 100%
* Fix - Afisarea intregii denumiri a tarii pe factura
* Add - Posibilitatea afisarii butonului "Plateste cu cardul" pe proforma
* Add - Compatibilitate cu WooCommerce 8.2
* Add - Compatibilitate cu WordPress 6.4

= 3.1.5 =
* Fix - Corectie facturare comanda cu multiple cupoane
* Add - Compatibilitate cu WordPress 6.3 si WooCommerce 8.0

= 3.1.4 =
* Fix - Corectie afisare discount 
* Fix - Corectie preluare cota TVA transport din WooCommerce
* Fix - Corectie parametru "numberOfItems" la facturare

= 3.1.3 =
* Fix - Dezactivarea activarii automate a taxelor in WooCommerce
* Add - Activarea automata a rotunjirilor WooCommerce la activarea taxelor WooCommerce

= 3.1.2 =
* Add - Activarea automata a taxelor si a rotunjirilor in WooCommerce pentru facturarea corecta in SmartBill
* Add - Compatibilitate cu WooCommerce 7.8

= 3.1.1 =
* Fix - Corectie preluare TVA discount din WooCommerce 

= 3.1.0 =
* Fix - Corectie preluare TVA din WooCommerce pentru transport
* Add - Compatibilitate cu WooCommerce 7.7

= 3.0.9 =
* Add - Compatibilitate cu WordPress 6.2
* Add - Compatibilitate cu WooCommerce 7.5
* Add - Setari: Posibilitatea adaugarii metodei de incasare a comenzii in mentiunea facturii
* Add - Posibilitatea emiterii facturii ca incasata indiferent de ce procesator de plati a fost utilizat pentru achitarea comenzii
* Fix - Corectie preluare TVA din WooCommerce pentru taxele cu zecimale
* Fix - Actualizare stocuri pentru produse cu variatii

= 3.0.8 =
* Fix - Preluare CIF corect din ANAF la facturare persoana juridica

= 3.0.7 =
* Add - Compatibilitate cu WooCommerce 7.3.0

= 3.0.6 =
* Fix - Eroare la emitere cu CIF intracomunitar
* Add - Compatibilitate cu WooCommerce 7.2.1

= 3.0.5 =
* Add - Setari: Optiune afisare "Plateste cu cardul" pe factura
* Fix - Corectie numar de produse actualizate la preluarea manuala a stocului
* Fix - Corectie la preluarea cotei TVA din WooCommerce la facturare

= 3.0.4 =
* Add - Setari: Adaugare optiune pentru sincronizarea manuala a stocurilor  
* Add - Setari: Afisare data si ora a ultimei sincronizari de stoc 
* Add - Setari: Adaugare optiune pentru a nu afisa transportul pe factura cand valoarea lui este 0
* Fix - Eroare la trimiterea automata a mailului pe PHP8  
* Fix - Eroare unitati masura la facturare 

= 3.0.2 =
* Add - Comenzile incasate cu WooCommerce Stripe Gateway pot fi acum facturate ca incasate.