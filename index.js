function setDay() {
    
    document.getElementById("card18").hidden = false;
    document.getElementById("card19").hidden = false;
    document.getElementById("card20").hidden = false;
    document.getElementById("card21").hidden = false;
    document.getElementById("card22").hidden = false;
    document.getElementById("card23").hidden = false;
    document.getElementById("card24").hidden = false;
    
    document.getElementById("greeting").innerHTML = "Invocations du Matin"; // Change le texte de salutation pour le matin

    // Modifie le contenu des cartes avec des invocations appropriées
    document.getElementById("card0").className = "card card-day"; // Applique le style du jour

    document.getElementById("card1").className = "card card-day"; // Applique le style du jour
    document.getElementById("card1").innerHTML = `
    <h3>3 fois</h3>
    <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"><strong></strong></font><strong style="font-weight: 600; font-size: 1.5em"><font color="#248d6c">سُوۡرَةُ الإخلاص</font></strong><span style=""><br></span><strong>بِسۡمِ ٱللهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِيمِ</strong></h2>
    <div class="paragraph" style="text-align:center;"><font size="6">قُلۡ هُوَ ٱللَّهُ أَحَدٌ (﻿١﻿) ٱللَّهُ ٱلصَّمَدُ (﻿٢﻿) لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ (﻿٣﻿) وَلَمۡ يَكُن لَّهُ ۥ ڪُفُوًا أَحَدٌ (﻿٤﻿)<br></font><br></div></td>
    <audio class="audio-ctrl" src="audios/Ikhlass.mp3" controls>
        Votre navigateur ne supporte pas l'élément audio.
    </audio>
    <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"></font><font color="#248d6c">Sourate Al-Ikhlas (Le Monothéisme pur)</font></strong><br><p style="font-size: medium;">Au nom d’Allah, le Tout Miséricordieux, le Très Miséricordieux.</p></h2>
    <p style="text-align:center; font-weight: 400; font-size: 1.5em;">(1) Dis : "Il est Allah, Unique.<br>(2)  Allah, Le Seul à être imploré pour ce que nous désirons<br>(3) Il n'a jamais engendré, n'a pas été engendré non plus.<br>(4)Et nul n'est égal à Lui". </p>
    <p style="font-weight: 100;">Jami at-Tirmidhi (3575)</p>
    `;

    document.getElementById("card2").className = "card card-day";
    document.getElementById("card2").innerHTML = `
    <h3>3 fois</h3>
    <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"><strong></strong></font><strong style="font-weight: 600; font-size: 1.5em"><font color="#248d6c"> سُوۡرَةُ الفَلَق</font></strong><span style=""><br></span><strong>بِسۡمِ ٱللهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِيمِ</strong></h2>
    <div class="paragraph" style="text-align:center;"><font size="6">
        قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ (﻿١﻿) مِن شَرِّ مَا خَلَقَ (﻿٢﻿) وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ (﻿٣﻿)<br> وَمِن شَرِّ ٱلنَّفَّـٰثَـٰتِ فِى ٱلۡعُقَدِ (﻿٤﻿)وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ (﻿٥﻿)<br></font><br></div></td>
    <audio class="audio-ctrl" src="audios/Falaq.mp3" controls>
        Votre navigateur ne supporte pas l'élément audio.
    </audio>
    <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"></font><font color="#248d6c">Sourate Al-Falaq (L'aube naissante)</font></strong><br><p style="font-size: medium;">Au nom d’Allah, le Tout Miséricordieux, le Très Miséricordieux.</p></h2>
    <p style="text-align:center; font-weight: 400; font-size: 1.5em;">(1) Dis : "Je cherche protection auprès du Seigneur de l'aube naissante,<br>(2) contre le mal des êtres qu'Il a créés,<br>(3) contre le mal de l'obscurité quand elle s'approfondit,<br>(4) contre le mal de celles qui soufflent sur les noeuds [les sorcières],<br>(5) et contre le mal de l'envieux quand il envie ".</p>
    <p style="font-weight: 100;">Jami at-Tirmidhi (3575)</p>
    `;

    document.getElementById("card3").className = "card card-day"; // Style du jour
    document.getElementById("card3").innerHTML = `
    <h3>3 fois</h3>
    <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"><strong>&nbsp;</strong></font><strong style="font-weight: 600; font-size: 1.5em"><font color="#248d6c">سُوۡرَةُ النَّاس</font></strong><span style=""><br></span><strong>بِسۡمِ ٱللهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِيمِ</strong></h2>
    <div class="paragraph" style="text-align: center;"><font size="6">قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ (﻿١﻿)&nbsp;مَلِكِ ٱلنَّاسِ (﻿٢﻿)&nbsp;إِلَـٰهِ ٱلنَّاسِ (﻿٣﻿)&nbsp;مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ (﻿٤﻿)<br>&nbsp;ٱلَّذِى يُوَسۡوِسُ فِى صُدُورِ ٱلنَّاسِ (﻿٥﻿)&nbsp;مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ (﻿٦﻿)<br></font><br></div></td>
    <audio class="audio-ctrl" src="audios/An Nass.mp3" controls>
        Votre navigateur ne supporte pas l'élément audio.
    </audio>
    <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"></font><font color="#248d6c">Sourate An-Nass (Les Hommes)</font></strong><br><p style="font-size: medium;">Au nom d’Allah, le Tout Miséricordieux, le Très Miséricordieux.</p></h2>
    <p style="text-align:center; font-weight: 400; font-size: 1.5em;">(1) Dis : "Je cherche protection auprès du Seigneur des hommes. <br>(2) Le Souverain des hommes,<br>(3) Dieu des hommes, <br> (4) contre le mal du mauvais conseiller, furtif, <br>(5) qui souffle le mal dans les poitrines des hommes,<br>(6) qu'il [le conseiller] soit un djinn, ou un être humain".</p>
    <p style="font-weight: 100;">Jami at-Tirmidhi (3575)</p>
    `;

    document.getElementById("card4").className = "card card-day";
    document.getElementById("card4").innerHTML = `
    <h3>1 fois</h3>
    <p style="font-weight: 600; font-size: 2em" dir="rtl">أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَىْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ</p>
    <audio class="audio-ctrl" src="audios/Asbahna.mp3" controls>
        Votre navigateur ne supporte pas l'élément audio.
    </audio>
    <p style="font-weight: 400; font-size: 1.5em;">Nous voilà au matin et le règne appartient à Allah. Louange à Allah, Il n’y a aucune divinité [digne d’être adorée] en dehors d’Allah, Seul, sans associé. À Lui la royauté, à Lui la louange et Il est capable de toute chose. Seigneur ! Je Te demande le bien que contient ce jour et le bien qui vient après. Et je cherche refuge auprès de Toi contre le mal que contient ce jour et le mal qui vient après. Seigneur ! Je cherche refuge auprès de Toi contre la paresse et les maux de la vieillesse. Je cherche refuge auprès de Toi contre le châtiment de l’Enfer et contre les tourments de la tombe.</p>
    <p style="font-weight: 100;">Sahih Muslim (2723)</p>
    `;

    document.getElementById("card5").className = "card card-day";
    document.getElementById("card5").innerHTML = `
    <h3>1 fois</h3>
    <p style="font-weight: 600; font-size: 2em" dir="rtl">أاللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ</p>
    <audio class="audio-ctrl" src="audios/bika Asbahna wa bika amsayna.mp3" controls>
        Votre navigateur ne supporte pas l'élément audio.
    </audio>
    <p style="font-weight: 400; font-size: 1.5em;">Ô Allah ! C’est par Toi que nous nous retrouvons au matin et c’est par Toi que nous nous retrouvons au soir. C’est par Toi que nous vivons et c’est par Toi que nous mourons et c’est vers Toi que se fera la Résurrection.</p>
    <p style="font-weight: 100;">Sunan Abi Dawud (5068)</p>
    `;

    document.getElementById("card6").className = "card card-day";
    document.getElementById("card6").innerHTML = `
    <h3> Sayyidul-Istighfar </h3>
        <p style="font-weight: 600; font-size: 2em" dir="rtl">اللَّهُمَّ أَنْتَ رَبِّي، لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَىَّ وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ</p>
        <audio class="audio-ctrl" src="audios/sayyidul istighfar.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Ô Allah ! Tu es mon Seigneur. Il n’y a aucune divinité [digne d’être adorée] en dehors de Toi. Tu m’as créé et je suis Ton serviteur, je me conforme autant que je peux à mon engagement et à ma promesse vis-à-vis de Toi. Je cherche refuge auprès de Toi contre le mal que j’ai commis. Je reconnais Ton bienfait à mon égard et je reconnais mon péché. Pardonne-moi donc, en effet nul autre que Toi ne pardonnes les péchés.</p>
        <p style="font-weight: 100;">Sahih al-Bukhari (6306)</p>
    `;

    document.getElementById("card7").className = "card card-day";
    document.getElementById("card7").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em" dir="rtl">اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَوَاتِ وَالأَرْضِ رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ أَشْهَدُ أنْ لاَ إِلَهَ إِلاَّ أَنْتَ أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ الشَّيْطَانِ وَشَرَكِهِ وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ</p>
        <audio class="audio-ctrl" src="audios/اللَّهُمَّ فَاطِرَ السَّمَوَاتِ وَالأَرْضِ.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;"> Ô Allah ! Connaisseur de l’invisible et de l’apparent, Créateur des cieux et de la Terre, Seigneur et Possesseur de toute chose, j’atteste qu’il n’y a aucune divinité [digne d’être adorée] en dehors de Toi, je cherche refuge auprès de Toi contre le mal de mon âme, contre le mal de Satan et de son polythéisme et contre le fait de me faire du mal à moi-même ou d’en faire à un musulman.</p>
        <p style="font-weight: 100;">Jami at-Tirmidhi (3529)</p>
    `;

    document.getElementById("card8").className = "card card-day";
    document.getElementById("card8").innerHTML = `
        <h3>4 fois</h3>
        <p style="font-weight: 600; font-size: 2em" dir="rtl">اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ وَمَلاَئِكَتَكَ وَجَمِيعَ خَلْقِكَ أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إِلاَّ أَنْتَ وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ</p>
        <audio class="audio-ctrl" src="audios/Asbaht_Oushidouka.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;"> Ô Seigneur ! Me voici au matin, je Te prends à témoin et je prends à témoins les porteurs de Ton Trône ainsi que Tes anges et toutes tes créatures, que c'est Toi Allah, il n'y a de divinité que Toi, Tu es Seul et sans associé, et que Mohammed est Ton esclave et Ton messager.</p>
        <p style="font-weight: 100;">Sunan Abi Dawud (5069)</p>
    `;

    document.getElementById("card9").className = "card card-day";
    document.getElementById("card9").innerHTML = `
        <h3>3 fois</h3>
        <p style="font-weight: 600; font-size: 2em" dir="rtl">بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَىْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ</p>
        <audio class="audio-ctrl" src="audios/bismillahilladhiLa.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">« Au nom d’Allah, tel qu’en compagnie de Son Nom rien sur Terre ni au ciel ne peut nuire, Lui l’Audient, l’Omniscient. »</p>
        <p style="font-weight: 100;">Sahîh At-Tirmidhî n°3388</p>
    `;
    document.getElementById("card10").className = "card card-day";
    document.getElementById("card10").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلاَمِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا</p>
        <audio class="audio-ctrl" src="audios/رَضِيتُ بِاللَّهِ رَبًّا.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Je suis satisfait d'Allah comme Seigneur, de l'islam comme religion et de Mouhammad comme prophète</p>
        <p style="font-weight: 100;">Sunan Ibn Majah (3870)</p>
    `;

    document.getElementById("card11").className = "card card-day";
    document.getElementById("card11").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ، أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لاَ شَرِيكَ لَكَ، لَكَ الْحَمْدُ وَلَكَ الشُّكْرُ</p>
        <audio class="audio-ctrl" src="audios/مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;"> Ô Seigneur ! Tout ce qui m’arrive comme bienfaits en ce jour qui se lève [ou ce soir], à moi ou à l’une de Tes créatures, provient de Toi Seul, sans associé. A Toi la louange ainsi que la gratitude.</p>
        <p style="font-weight: 100;">Sahîh Abû Dâwûd n°5073.</p>
    `;

    document.getElementById("card12").className = "card card-day";
    document.getElementById("card12").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">اللَّهُمَّ إِنِّي أَسْأَلُكَ العَافِيةَ فِي الدُّنْيَا وَ الآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ العَفْوَ وَ العَافِيةَ فِي دِينِي وَ دُنْيَايَ وَ أَهْلِي وَ مَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَ آمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَ مِنْ خَلْفِي وَ عَنْ يَمِينِي وَ عَنْ شِمَالِي، وَ مِنْ فَوْقِي، وَ أَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي</p>
        <audio class="audio-ctrl" src="audios/اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Ô Allah ! Je te demande le salut dans cette vie et dans l’au-delà. Ô Allah ! Je Te demande le pardon et le salut dans ma religion, ma vie, ma famille et mes biens. Ô Allah ! Cache mes défauts et mets-moi à l’abri de toutes mes craintes. Ô Allah ! Protège-moi par devant, par derrière, sur ma droite, sur ma gauche et au-dessus de moi. Je me mets sous la protection de Ta grandeur pour ne pas être enseveli.</p>
        <p style="font-weight: 100;">Sahîh Abû Dâwûd n°5074.</p> 
    `;

    document.getElementById("card13").className = "card card-day";
    document.getElementById("card13").innerHTML = `
        <h3>3 fois</h3>
        <p style="font-weight: 600; font-size: 2em">سُبْحَانَ اللهِ وَ بِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَ مِدَادَ كَلِمَاتِهِ</p>
        <audio class="audio-ctrl" src="audios/subhanAllahiWabihamdihi.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Pureté et louange à Allah, autant de fois qu’il y a de créatures dans Sa création, jusqu’à ce qu'Il en soit satisfait, autant que le poids de Son trône est lourd et autant qu’il faudrait d'encre pour écrire Ses paroles.</p>
        <p style="font-weight: 100;">Al-Bukhari et Muslim</p>
    `;

    document.getElementById("card14").className = "card card-day";
    document.getElementById("card14").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">أَصْبَحْنَا وَ أَصْبَحَ المُلْكُ للهِ رَبِّ العَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا اليَوْمِ، فَتْحَهُ، وَ نَصْرَهُ، وَ نُورَهُ وَبَرَكَتَهُ، و َهُدَاهُ، وَ أَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَ شَرِّ مَا بَعْدَهُ</p>
        <audio class="audio-ctrl" src="audios/conquêtes, victoires, lumière, bénédiction.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Nous voilà au matin et la Royauté appartient à Allah, le Seigneur de l’Univers. Ô Allah ! Je Te demande le bien de ce jour : ce qu’il contient comme conquêtes, victoires, lumière, bénédiction et guidée. Je cherche refuge auprès de Toi contre le mal qu’il contient et le mal qui vient après lui.</p>
        <p style="font-weight: 100;">Sahîh Al-Jâmi n° 352</p>
    `;

    document.getElementById("card15").className = "card card-day";
    document.getElementById("card15").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ</p>
        <audio class="audio-ctrl" src="audios/l’anxiété, la tristesse.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Ô Allah ! Je demande protection auprès de Toi contre l'anxiété, la tristesse, l'incapacité, la fainéantise, la lâcheté, l'avarice, la difficulté de la dette et la domination des hommes</p>
        <p style="font-weight: 100;">Al-Bukhari n°6369</p>
    `;

    document.getElementById("card16").className = "card card-day";
    document.getElementById("card16").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاً، وَ رِزْقاً طَيِّباً، وَ عَمَلاً مُتَقَبَّلاً</p>
        <audio class="audio-ctrl" src="audios/savoir utile.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;"> Ô Allah ! Je Te demande [de m’accorder] un savoir utile, une subsistance licite et des œuvres que Tu agrées</p>
        <p style="font-weight: 100;">Sahîh Ibn Mâjah n° 925</p>
    `;

    document.getElementById("card17").className = "card card-day";
    document.getElementById("card17").innerHTML = `
        <h3>3 fois</h3>
        <p style="font-weight: 600; font-size: 2em">اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الكُفْرِ، وَ الفَقْرِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ القَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ</p>
        <audio class="audio-ctrl" src="audios/اللَّهُمَّ عَافِنِي فِي بَدَنِي.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Ô Allah ! Préserve mon corps. Ô Allah ! Préserve mon ouïe. Ô Allah ! Préserve ma vue. Il n’y a aucune divinité [digne d’être adorée] en dehors de Toi. Ô Allah ! Je cherche refuge auprès de Toi contre la mécréance et la pauvreté. Je me mets sous Ta protection contre les tourments de la tombe. Il n’y a aucune divinité [digne d’être adorée] en dehors de Toi</p>
        <p style="font-weight: 100;">Sahîh Abû Dâwûd n°5090</p>
    `;

    document.getElementById("card18").className = "card card-day";
    document.getElementById("card18").innerHTML = `
        <h3>3 fois</h3>
        <p style="font-weight: 600; font-size: 2em">أَعـوذُ بِكَلِـماتِ اللّهِ التّـامّاتِ مِنْ شَـرِّ ما خَلَـق</p>
        <audio class="audio-ctrl" src="audios/Je cherche refuge auprès des paroles parfaites d'Allah contre le mal de Ses créatures.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Je cherche refuge auprès des paroles parfaites d'Allah contre le mal de Ses créatures</p>
        <p style="font-weight: 100;">Muslim 4/2080</p>
    `;

    document.getElementById("card19").className = "card card-day";
    document.getElementById("card19").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">رَضِيتُ بِاللهِ رَبّاً وَ بِالإِسْلاَمِ دِيناً وَ بِمُحَمَّدٍ ﷺ نَبِيّاً</p>
        <audio class="audio-ctrl" src="audios/رَضِيتُ بِاللَّهِ رَبًّا.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">J’agrée Allah comme Seigneur, l’Islam comme religion et Muhammad ﷺ comme prophète</p>
        <p style="font-weight: 100;">As-Sahîhah n° 334</p>
    `;

    document.getElementById("card20").className = "card card-day";
    document.getElementById("card20").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">يَا حَيُّ يَا قَيُّومُ، بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ أَبَدًا</p>
        <audio class="audio-ctrl" src="audios/يَا حَيُّ يَا قَيُّومُ.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;"> Ô Toi le Vivant, Celui qui n'a besoin de rien et dont toute chose dépend, j'implore secours auprès de Ta miséricorde. Améliore ma situation en tout point et ne me laisse pas à mon propre sort, ne serait-ce que le temps d'un clin d'œil</p>
        <p style="font-weight: 100;">Hakim (1/545)</p>
    `;

    document.getElementById("card21").className = "card card-day";
    document.getElementById("card21").innerHTML = `
        <h3>10 fois</h3>
        <p style="font-weight: 600; font-size: 2em">لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ</p>
        <audio class="audio-ctrl" src="audios/لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Il n’y a aucune divinité [digne d’être adorée] en dehors d’Allah, Seul, sans associé. À Lui la royauté, à Lui la louange et Il est capable de toute chose.</p>
        <p style="font-weight: 100;">Sahîh Abû Dâwûd n°5077</p>
    `;

    document.getElementById("card22").className = "card card-day";
    document.getElementById("card22").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">أَصْبَحْنَا عَلَى فِطْرَةِ الإِسْلاَمِ، وَ عَلَى كَلِمَةِ الإِخْلاَصِ، وَ عَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ وَ عَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفاً مُسْلِماً وَ مَا كَانَ مِنَ المُشْرِكِينَ</p>
        <audio class="audio-ctrl" src="audios/أَصْبَحْنَا عَلَى فِطْرَةِ الإِسْلاَمِ.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Nous voici au matin, en conformité avec la saine disposition qu’est l’Islam, avec la parole du monothéisme, avec la religion de notre Prophète Mohammed et sur la voie de notre père Ibrâhîm qui vouait un culte exclusif à Allah, soumis à Lui, et n’était point du nombre des polythéistes</p>
        <p style="font-weight: 100;">As-Sahîhah n° 2989</p>
    `;

    document.getElementById("card23").className = "card card-day";
    document.getElementById("card23").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">اللَّهُمَّ إِنَّا نَعُوذُ بِكَ أَنْ نُشْرِكَ بِكَ شَيْئاً نَعْلَمُهُ، وَ نَسْتَغْفِرُكَ لِمَا لاَ نَعْلَمُهُ</p>
        <audio class="audio-ctrl" src="audios/اللَّهُمَّ إِنَّا نَعُوذُ بِكَ أَنْ نُشْرِكَ بِكَ شَيْئاً نَعْلَمُهُ، وَ نَسْتَغْفِرُكَ لِمَا لاَ نَعْلَمُهُ.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Ô Allah ! Nous cherchons refuge auprès de Toi contre le fait de Te donner des associés consciemment et nous Te demandons pardon pour ce dont nous ne sommes pas conscients</p>
        <p style="font-weight: 100;">Adab Al Mufrad hadith n°716</p>
    `;

    document.getElementById("card24").className = "card card-day";
    document.getElementById("card24").innerHTML = `
        <h3>7 fois</h3>
        <p style="font-weight: 600; font-size: 2em"> حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ </p>
        <audio class="audio-ctrl" src="audios/حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Allah me suffit, il n'y pas d'autre divinité méritant d'être adorée en dehors de Lui, c'est en Lui que je place ma confiance et Il est le Seigneur du trône immense</p>
        <p style="font-weight: 100;">Sunan Abu Dawud n°5081</p>
    `;
    document.getElementById("card25").className = "card card-day";
}

















function setNight() {
    document.getElementById("greeting").innerHTML = "Invocations du Soir";
    
    document.getElementById("card18").hidden = false;
    document.getElementById("card19").hidden = false;
    document.getElementById("card20").hidden = false;
    document.getElementById("card21").hidden = false;
    document.getElementById("card22").hidden = false;
    document.getElementById("card23").hidden = false;
    document.getElementById("card24").hidden = false;

    document.getElementById("card0").className = "card card-night"; // Applique le style du jour
    
    document.getElementById("card1").className = "card card-night"; // Applique le style du jour
    document.getElementById("card1").innerHTML = `
    <h3>3 fois</h3>
    <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"><strong></strong></font><strong style="font-weight: 600; font-size: 1.5em"><font color="#248d6c">سُوۡرَةُ الإخلاص</font></strong><span style=""><br></span><strong>بِسۡمِ ٱللهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِيمِ</strong></h2>
    <div class="paragraph" style="text-align:center;"><font size="6">قُلۡ هُوَ ٱللَّهُ أَحَدٌ (﻿١﻿) ٱللَّهُ ٱلصَّمَدُ (﻿٢﻿) لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ (﻿٣﻿) وَلَمۡ يَكُن لَّهُ ۥ ڪُفُوًا أَحَدٌ (﻿٤﻿)<br></font><br></div></td>
    <audio class="audio-ctrl" src="audios/Ikhlass.mp3" controls>
        Votre navigateur ne supporte pas l'élément audio.
    </audio>
    <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"></font><font color="#248d6c">Sourate Al-Ikhlas (Le Monothéisme pur)</font></strong><br><p style="font-size: medium;">Au nom d’Allah, le Tout Miséricordieux, le Très Miséricordieux.</p></h2>
    <p style="text-align:center; font-weight: 400; font-size: 1.5em;">(1) Dis : "Il est Allah, Unique.<br>(2)  Allah, Le Seul à être imploré pour ce que nous désirons<br>(3) Il n'a jamais engendré, n'a pas été engendré non plus.<br>(4)Et nul n'est égal à Lui". </p>
    <p style="font-weight: 100;">Jami at-Tirmidhi (3575)</p>
    `;

    document.getElementById("card2").className = "card card-night";
    document.getElementById("card2").innerHTML = `
    <h3>3 fois</h3>
    <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"><strong></strong></font><strong style="font-weight: 600; font-size: 1.5em"><font color="#248d6c"> سُوۡرَةُ الفَلَق</font></strong><span style=""><br></span><strong>بِسۡمِ ٱللهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِيمِ</strong></h2>
    <div class="paragraph" style="text-align:center;"><font size="6">
        قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ (﻿١﻿) مِن شَرِّ مَا خَلَقَ (﻿٢﻿) وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ (﻿٣﻿)<br> وَمِن شَرِّ ٱلنَّفَّـٰثَـٰتِ فِى ٱلۡعُقَدِ (﻿٤﻿)وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ (﻿٥﻿)<br></font><br></div></td>
    <audio class="audio-ctrl" src="audios/Falaq.mp3" controls>
        Votre navigateur ne supporte pas l'élément audio.
    </audio>
    <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"></font><font color="#248d6c">Sourate Al-Falaq (L'aube naissante)</font></strong><br><p style="font-size: medium;">Au nom d’Allah, le Tout Miséricordieux, le Très Miséricordieux.</p></h2>
    <p style="text-align:center; font-weight: 400; font-size: 1.5em;">(1) Dis : "Je cherche protection auprès du Seigneur de l'aube naissante,<br>(2) contre le mal des êtres qu'Il a créés,<br>(3) contre le mal de l'obscurité quand elle s'approfondit,<br>(4) contre le mal de celles qui soufflent sur les noeuds [les sorcières],<br>(5) et contre le mal de l'envieux quand il envie ".</p>
    <p style="font-weight: 100;">Jami at-Tirmidhi (3575)</p>
    `;

    document.getElementById("card3").className = "card card-night"; // Style du soir
    document.getElementById("card3").innerHTML = `
    <h3>3 fois</h3>
    <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"><strong>&nbsp;</strong></font><strong style="font-weight: 600; font-size: 1.5em"><font color="#248d6c">سُوۡرَةُ النَّاس</font></strong><span style=""><br></span><strong>بِسۡمِ ٱللهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِيمِ</strong></h2>
    <div class="paragraph" style="text-align: center;"><font size="6">قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ (﻿١﻿)&nbsp;مَلِكِ ٱلنَّاسِ (﻿٢﻿)&nbsp;إِلَـٰهِ ٱلنَّاسِ (﻿٣﻿)&nbsp;مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ (﻿٤﻿)<br>&nbsp;ٱلَّذِى يُوَسۡوِسُ فِى صُدُورِ ٱلنَّاسِ (﻿٥﻿)&nbsp;مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ (﻿٦﻿)<br></font><br></div></td>
    <audio class="audio-ctrl" src="audios/An Nass.mp3" controls>
        Votre navigateur ne supporte pas l'élément audio.
    </audio>
    <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"></font><font color="#248d6c">Sourate An-Nass (Les Hommes)</font></strong><br><p style="font-size: medium;">Au nom d’Allah, le Tout Miséricordieux, le Très Miséricordieux.</p></h2>
    <p style="text-align:center; font-weight: 400; font-size: 1.5em;">(1) Dis : "Je cherche protection auprès du Seigneur des hommes. <br>(2) Le Souverain des hommes,<br>(3) Dieu des hommes, <br> (4) contre le mal du mauvais conseiller, furtif, <br>(5) qui souffle le mal dans les poitrines des hommes,<br>(6) qu'il [le conseiller] soit un djinn, ou un être humain".</p>
    <p style="font-weight: 100;">Jami at-Tirmidhi (3575)</p>
    `;

    document.getElementById("card4").className = "card card-night";
    document.getElementById("card4").innerHTML = `
    <h3>1 fois</h3>
    <p style="font-weight: 600; font-size: 2em" dir="rtl">أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَىْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ</p>
    <audio class="audio-ctrl" src="audios/أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ.mp3" controls>
        Votre navigateur ne supporte pas l'élément audio.
    </audio>
    <p style="font-weight: 400; font-size: 1.5em;"> Nous voilà au soir et le règne appartient à Allah. Louange à Allah, Il n’y a aucune divinité [digne d’être adorée] en dehors d’Allah, Seul, sans associé. À Lui la royauté, à Lui la louange et Il est capable de toute chose. Seigneur ! Je Te demande le bien que contient cette nuit et le bien qui vient après. Et je cherche refuge auprès de Toi contre le mal que contient cette nuit et le mal qui vient après. Seigneur ! Je cherche refuge auprès de Toi contre la paresse et les maux de la vieillesse. Je cherche refuge auprès de Toi contre le châtiment de l’Enfer et contre les tourments de la tombe.</p>
    <p style="font-weight: 100;">Sahih Muslim (2723)</p>
    `;

    document.getElementById("card5").className = "card card-night";
    document.getElementById("card5").innerHTML = `
    <h3>1 fois</h3>
    <p style="font-weight: 600; font-size: 2em" dir="rtl">أاللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ</p>
    <audio class="audio-ctrl" src="audios/bika Asbahna wa bika amsayna.mp3" controls>
        Votre navigateur ne supporte pas l'élément audio.
    </audio>
    <p style="font-weight: 400; font-size: 1.5em;"> Ô Allah ! C’est par Toi que nous nous retrouvons au matin et c’est par Toi que nous nous retrouvons au soir. C’est par Toi que nous vivons et c’est par Toi que nous mourons et c’est vers Toi que se fera la Résurrection.</p>
    <p style="font-weight: 100;">Sunan Abi Dawud (5068)</p>
    `;

    document.getElementById("card6").className = "card card-night";
    document.getElementById("card6").innerHTML = `
    <h3> Sayyidul-Istighfar </h3>
        <p style="font-weight: 600; font-size: 2em" dir="rtl">اللَّهُمَّ أَنْتَ رَبِّي، لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَىَّ وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ</p>
        <audio class="audio-ctrl" src="audios/sayyidul istighfar.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Ô Allah ! Tu es mon Seigneur. Il n’y a aucune divinité [digne d’être adorée] en dehors de Toi. Tu m’as créé et je suis Ton serviteur, je me conforme autant que je peux à mon engagement et à ma promesse vis-à-vis de Toi. Je cherche refuge auprès de Toi contre le mal que j’ai commis. Je reconnais Ton bienfait à mon égard et je reconnais mon péché. Pardonne-moi donc, en effet nul autre que Toi ne pardonnes les péchés.</p>
        <p style="font-weight: 100;">Sahih al-Bukhari (6306)</p>
    `;

    document.getElementById("card7").className = "card card-night";
    document.getElementById("card7").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em" dir="rtl">اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَوَاتِ وَالأَرْضِ رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ أَشْهَدُ أنْ لاَ إِلَهَ إِلاَّ أَنْتَ أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ الشَّيْطَانِ وَشَرَكِهِ وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ</p>
        <audio class="audio-ctrl" src="audios/اللَّهُمَّ فَاطِرَ السَّمَوَاتِ وَالأَرْضِ.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Ô Allah ! Connaisseur de l’invisible et de l’apparent, Créateur des cieux et de la Terre, Seigneur et Possesseur de toute chose, j’atteste qu’il n’y a aucune divinité [digne d’être adorée] en dehors de Toi, je cherche refuge auprès de Toi contre le mal de mon âme, contre le mal de Satan et de son polythéisme et contre le fait de me faire du mal à moi-même ou d’en faire à un musulman.</p>
        <p style="font-weight: 100;">Jami at-Tirmidhi (3529)</p>
    `;

    document.getElementById("card8").className = "card card-night";
    document.getElementById("card8").innerHTML = `
        <h3>4 fois</h3>
        <p style="font-weight: 600; font-size: 2em" dir="rtl">اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ وَمَلاَئِكَتَكَ وَجَمِيعَ خَلْقِكَ أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إِلاَّ أَنْتَ وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ</p>
        <audio class="audio-ctrl" src="audios/أَمْسَيْنَتُ أُشْهِدُكَ.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Ô Seigneur ! Me voici au soir, je Te prends à témoin et je prends à témoins les porteurs de Ton Trône ainsi que Tes anges et toutes tes créatures, que c'est Toi Allah, il n'y a de divinité que Toi, Tu es Seul et sans associé, et que Mohammed est Ton esclave et Ton messager. </p>
        <p style="font-weight: 100;">Sunan Abi Dawud (5069)</p>
    `;

    document.getElementById("card9").className = "card card-night";
    document.getElementById("card9").innerHTML = `
        <h3>3 fois</h3>
        <p style="font-weight: 600; font-size: 2em" dir="rtl">بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَىْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ</p>
        <audio class="audio-ctrl" src="audios/bismillahilladhiLa.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;"> Au nom d’Allah, tel qu’en compagnie de Son Nom rien sur Terre ni au ciel ne peut nuire, Lui l’Audient, l’Omniscient. </p>
        <p style="font-weight: 100;">Sahîh At-Tirmidhî n°3388</p>
    `;
    document.getElementById("card10").className = "card card-night";
    document.getElementById("card10").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلاَمِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا</p>
        <audio class="audio-ctrl" src="audios/رَضِيتُ بِاللَّهِ رَبًّا.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Je suis satisfait d'Allah comme Seigneur, de l'islam comme religion et de Mouhammad comme prophète</p>
        <p style="font-weight: 100;">Sunan Ibn Majah (3870)</p>
    `;

    document.getElementById("card11").className = "card card-night";
    document.getElementById("card11").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">اللَّهُمَّ مَا أمسي بِي مِنْ نِعْمَةٍ، أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لاَ شَرِيكَ لَكَ، لَكَ الْحَمْدُ وَلَكَ الشُّكْرُ</p>
        <audio class="audio-ctrl" src="audios/اللهم ما أمسى بي من نعمة أو بأحد من خلقك فمنك وحدك لا شريك لك فلك الحمد ولك الشكر_gQgC6eJr6Tw.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;"> Ô Seigneur ! Tout ce qui m’arrive comme bienfaits en ce soir, à moi ou à l’une de Tes créatures, provient de Toi Seul, sans associé. A Toi la louange ainsi que la gratitude.</p>
        <p style="font-weight: 100;">Sahîh Abû Dâwûd n°5073.</p>
    `;

    document.getElementById("card12").className = "card card-night";
    document.getElementById("card12").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">اللَّهُمَّ إِنِّي أَسْأَلُكَ العَافِيةَ فِي الدُّنْيَا وَ الآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ العَفْوَ وَ العَافِيةَ فِي دِينِي وَ دُنْيَايَ وَ أَهْلِي وَ مَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَ آمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَ مِنْ خَلْفِي وَ عَنْ يَمِينِي وَ عَنْ شِمَالِي، وَ مِنْ فَوْقِي، وَ أَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي</p>
        <audio class="audio-ctrl" src="audios/اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Ô Allah ! Je te demande le salut dans cette vie et dans l’au-delà. Ô Allah ! Je Te demande le pardon et le salut dans ma religion, ma vie, ma famille et mes biens. Ô Allah ! Cache mes défauts et mets-moi à l’abri de toutes mes craintes. Ô Allah ! Protège-moi par devant, par derrière, sur ma droite, sur ma gauche et au-dessus de moi. Je me mets sous la protection de Ta grandeur pour ne pas être enseveli.</p>
        <p style="font-weight: 100;">Sahîh Abû Dâwûd n°5074.</p> 
    `;

    document.getElementById("card13").className = "card card-night";
    document.getElementById("card13").innerHTML = `
        <h3>3 fois</h3>
        <p style="font-weight: 600; font-size: 2em">سُبْحَانَ اللهِ وَ بِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَ مِدَادَ كَلِمَاتِهِ</p>
        <audio class="audio-ctrl" src="audios/subhanAllahiWabihamdihi.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Pureté et louange à Allah, autant de fois qu’il y a de créatures dans Sa création, jusqu’à ce qu'Il en soit satisfait, autant que le poids de Son trône est lourd et autant qu’il faudrait d'encre pour écrire Ses paroles.</p>
        <p style="font-weight: 100;">Al-Bukhari et Muslim</p>
    `;

    document.getElementById("card14").className = "card card-night";
    document.getElementById("card14").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">أَمْسَيْنَا وَ أَمْسَى المُلْكُ للهِ رَبِّ العَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيلَةِ، فَتْحَهَا، وَ نَصْرَهَا، وَ نُورَهَا وَ بَرَكَتَهَا، وَ هُدَاهَا، وَ أَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَ شَرِّ مَا بَعْدَهَا</p>
        <audio class="audio-ctrl" src="audios/أَمْسَيْنَا وَ أَمْسَى المُلْكُ للهِ رَبِّ العَالَمِينَ.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Nous voilà au soir et la Royauté appartient à Allah, le Seigneur de l’Univers. Ô Allah ! Je Te demande le bien de cette nuit : ce qu’elle contient comme conquêtes, victoires, lumière, bénédiction et guidée. Je cherche refuge auprès de Toi contre le mal qu’elle contient et le mal qui vient après elle.</p>
        <p style="font-weight: 100;">Sahîh Al-Jâmi n° 352</p>
    `;

    document.getElementById("card15").className = "card card-night";
    document.getElementById("card15").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ</p>
        <audio class="audio-ctrl" src="audios/l’anxiété, la tristesse.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Ô Allah ! Je demande protection auprès de Toi contre l'anxiété, la tristesse, l'incapacité, la fainéantise, la lâcheté, l'avarice, la difficulté de la dette et la domination des hommes</p>
        <p style="font-weight: 100;">Al-Bukhari n°6369</p>
    `;

    document.getElementById("card16").className = "card card-night";
    document.getElementById("card16").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاً، وَ رِزْقاً طَيِّباً، وَ عَمَلاً مُتَقَبَّلاً</p>
        <audio class="audio-ctrl" src="audios/savoir utile.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;"> Ô Allah ! Je Te demande [de m’accorder] un savoir utile, une subsistance licite et des œuvres que Tu agrées</p>
        <p style="font-weight: 100;">Sahîh Ibn Mâjah n° 925</p>
    `;

    document.getElementById("card17").className = "card card-night";
    document.getElementById("card17").innerHTML = `
        <h3>3 fois</h3>
        <p style="font-weight: 600; font-size: 2em">اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الكُفْرِ، وَ الفَقْرِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ القَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ</p>
        <audio class="audio-ctrl" src="audios/اللَّهُمَّ عَافِنِي فِي بَدَنِي.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Ô Allah ! Préserve mon corps. Ô Allah ! Préserve mon ouïe. Ô Allah ! Préserve ma vue. Il n’y a aucune divinité [digne d’être adorée] en dehors de Toi. Ô Allah ! Je cherche refuge auprès de Toi contre la mécréance et la pauvreté. Je me mets sous Ta protection contre les tourments de la tombe. Il n’y a aucune divinité [digne d’être adorée] en dehors de Toi</p>
        <p style="font-weight: 100;">Sahîh Abû Dâwûd n°5090</p>
    `;

    document.getElementById("card18").className = "card card-night";
    document.getElementById("card18").innerHTML = `
        <h3>3 fois</h3>
        <p style="font-weight: 600; font-size: 2em">أَعـوذُ بِكَلِـماتِ اللّهِ التّـامّاتِ مِنْ شَـرِّ ما خَلَـق</p>
        <audio class="audio-ctrl" src="audios/Je cherche refuge auprès des paroles parfaites d'Allah contre le mal de Ses créatures.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Je cherche refuge auprès des paroles parfaites d'Allah contre le mal de Ses créatures</p>
        <p style="font-weight: 100;">Muslim 4/2080</p>
    `;

    document.getElementById("card19").className = "card card-night";
    document.getElementById("card19").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">رَضِيتُ بِاللهِ رَبّاً وَ بِالإِسْلاَمِ دِيناً وَ بِمُحَمَّدٍ ﷺ نَبِيّاً</p>
        <audio class="audio-ctrl" src="audios/رَضِيتُ بِاللَّهِ رَبًّا.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">J’agrée Allah comme Seigneur, l’Islam comme religion et Muhammad ﷺ comme prophète</p>
        <p style="font-weight: 100;">As-Sahîhah n° 334</p>
    `;

    document.getElementById("card20").className = "card card-night";
    document.getElementById("card20").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">يَا حَيُّ يَا قَيُّومُ، بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ أَبَدًا</p>
        <audio class="audio-ctrl" src="audios/يَا حَيُّ يَا قَيُّومُ.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;"> Ô Toi le Vivant, Celui qui n'a besoin de rien et dont toute chose dépend, j'implore secours auprès de Ta miséricorde. Améliore ma situation en tout point et ne me laisse pas à mon propre sort, ne serait-ce que le temps d'un clin d'œil</p>
        <p style="font-weight: 100;">Hakim (1/545)</p>
    `;

    document.getElementById("card21").className = "card card-night";
    document.getElementById("card21").innerHTML = `
        <h3>10 fois</h3>
        <p style="font-weight: 600; font-size: 2em">لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ</p>
        <audio class="audio-ctrl" src="audios/لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Il n’y a aucune divinité [digne d’être adorée] en dehors d’Allah, Seul, sans associé. À Lui la royauté, à Lui la louange et Il est capable de toute chose.</p>
        <p style="font-weight: 100;">Sahîh Abû Dâwûd n°5077</p>
    `;

    document.getElementById("card22").className = "card card-night";
    document.getElementById("card22").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">أمسينا عَلَى فِطْرَةِ الإِسْلاَمِ، وَ عَلَى كَلِمَةِ الإِخْلاَصِ، وَ عَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ وَ عَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفاً مُسْلِماً وَ مَا كَانَ مِنَ المُشْرِكِينَ</p>
        <audio class="audio-ctrl" src="audios/أمسينا عَلَى فِطْرَةِ الإِسْلاَ.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Nous voici au soir, en conformité avec la saine disposition qu’est l’Islam, avec la parole du monothéisme, avec la religion de notre Prophète Mohammed et sur la voie de notre père Ibrâhîm qui vouait un culte exclusif à Allah, soumis à Lui, et n’était point du nombre des polythéistes.</p>
        <p style="font-weight: 100;">As-Sahîhah n° 2989</p>
    `;

    document.getElementById("card23").className = "card card-night";
    document.getElementById("card23").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">اللَّهُمَّ إِنَّا نَعُوذُ بِكَ أَنْ نُشْرِكَ بِكَ شَيْئاً نَعْلَمُهُ، وَ نَسْتَغْفِرُكَ لِمَا لاَ نَعْلَمُهُ</p>
        <audio class="audio-ctrl" src="audios/اللَّهُمَّ إِنَّا نَعُوذُ بِكَ أَنْ نُشْرِكَ بِكَ شَيْئاً نَعْلَمُهُ، وَ نَسْتَغْفِرُكَ لِمَا لاَ نَعْلَمُهُ.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Ô Allah ! Nous cherchons refuge auprès de Toi contre le fait de Te donner des associés consciemment et nous Te demandons pardon pour ce dont nous ne sommes pas conscients</p>
        <p style="font-weight: 100;">Adab Al Mufrad hadith n°716</p>
    `;

    document.getElementById("card24").className = "card card-night";
    document.getElementById("card24").innerHTML = `
        <h3>7 fois</h3>
        <p style="font-weight: 600; font-size: 2em"> حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ </p>
        <audio class="audio-ctrl" src="audios/حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Allah me suffit, il n'y pas d'autre divinité méritant d'être adorée en dehors de Lui, c'est en Lui que je place ma confiance et Il est le Seigneur du trône immense</p>
        <p style="font-weight: 100;">Sunan Abu Dawud n°5081</p>
    `;
    document.getElementById("card25").className = "card card-night";
}

















function setSleep() {

        document.getElementById("card15").hidden = true;
        document.getElementById("card16").hidden = true;
        document.getElementById("card18").hidden = true;
        document.getElementById("card19").hidden = true;
        document.getElementById("card20").hidden = true;
        document.getElementById("card21").hidden = true;
        document.getElementById("card22").hidden = true;
        document.getElementById("card23").hidden = true;
        document.getElementById("card24").hidden = true;
        document.getElementById("greeting").innerHTML = "Invocations du Sommeil";

    document.getElementById("card0").className = "card card-sleep"; // Applique le style du sommeil

    document.getElementById("card1").className = "card card-sleep"; // Applique le style du sommeil
    document.getElementById("card1").innerHTML = `
        <h3>1 fois</h3>
        <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"><strong>&nbsp;</strong></font><strong style="font-weight: 600; font-size: 1.5em"><font color="#248d6c">الآيتين من آخر سورة البقرة</font></strong><span style=""><br></span><strong>بِسۡمِ ٱللهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِيمِ</strong></h2>
        <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"></font><font color="#248d6c">Les deux dernières Ayat de Sourate Al-Baqarah (La Vache)</font></strong><br><p style="font-size: medium;">Au nom d’Allah, le Tout Miséricordieux, le Très Miséricordieux.</p></h2>
        <iframe width="80%" height="720" src="https://www.youtube.com/embed/mSTtmUaWNMc" title="❤️ 😍 Islam Sobhi (إسلام صبحي)  | Sourate Al-Baqarah (285-286) 😍 ❤️" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p style="font-weight: 100;">Al Bukhari & Muslim</p>
    `;
    document.getElementById("card2").className = "card card-sleep"; // Applique le style du sommeil
    document.getElementById("card2").innerHTML = `
        <h3>3 fois</h3>
        <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"><strong></strong></font><strong style="font-weight: 600; font-size: 1.5em"><font color="#248d6c">سُوۡرَةُ الإخلاص</font></strong><span style=""><br></span><strong>بِسۡمِ ٱللهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِيمِ</strong></h2>
        <div class="paragraph" style="text-align:center;"><font size="6">قُلۡ هُوَ ٱللَّهُ أَحَدٌ (﻿١﻿) ٱللَّهُ ٱلصَّمَدُ (﻿٢﻿) لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ (﻿٣﻿) وَلَمۡ يَكُن لَّهُ ۥ ڪُفُوًا أَحَدٌ (﻿٤﻿)<br></font><br></div></td>
        <audio class="audio-ctrl" src="audios/Ikhlass.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"></font><font color="#248d6c">Sourate Al-Ikhlas (Le Monothéisme pur)</font></strong><br><p style="font-size: medium;">Au nom d’Allah, le Tout Miséricordieux, le Très Miséricordieux.</p></h2>
        <p style="text-align:center; font-weight: 400; font-size: 1.5em;">(1) Dis : "Il est Allah, Unique.<br>(2)  Allah, Le Seul à être imploré pour ce que nous désirons<br>(3) Il n'a jamais engendré, n'a pas été engendré non plus.<br>(4)Et nul n'est égal à Lui". </p>
        <p style="font-weight: 100;">Jami at-Tirmidhi (3575)</p>
    `;

    document.getElementById("card3").className = "card card-sleep";
    document.getElementById("card3").innerHTML = `
        <h3>3 fois</h3>
        <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"><strong></strong></font><strong style="font-weight: 600; font-size: 1.5em"><font color="#248d6c"> سُوۡرَةُ الفَلَق</font></strong><span style=""><br></span><strong>بِسۡمِ ٱللهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِيمِ</strong></h2>
        <div class="paragraph" style="text-align:center;"><font size="6">
            قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ (﻿١﻿) مِن شَرِّ مَا خَلَقَ (﻿٢﻿) وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ (﻿٣﻿)<br> وَمِن شَرِّ ٱلنَّفَّـٰثَـٰتِ فِى ٱلۡعُقَدِ (﻿٤﻿)وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ (﻿٥﻿)<br></font><br></div></td>
        <audio class="audio-ctrl" src="audios/Falaq.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"></font><font color="#248d6c">Sourate Al-Falaq (L'aube naissante)</font></strong><br><p style="font-size: medium;">Au nom d’Allah, le Tout Miséricordieux, le Très Miséricordieux.</p></h2>
        <p style="text-align:center; font-weight: 400; font-size: 1.5em;">(1) Dis : "Je cherche protection auprès du Seigneur de l'aube naissante,<br>(2) contre le mal des êtres qu'Il a créés,<br>(3) contre le mal de l'obscurité quand elle s'approfondit,<br>(4) contre le mal de celles qui soufflent sur les noeuds [les sorcières],<br>(5) et contre le mal de l'envieux quand il envie ".</p>
        <p style="font-weight: 100;">Jami at-Tirmidhi (3575)</p>
    `;

    document.getElementById("card4").className = "card card-sleep"; // Style du sommeil
    document.getElementById("card4").innerHTML = `
        <h3>3 fois</h3>
        <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"><strong>&nbsp;</strong></font><strong style="font-weight: 600; font-size: 1.5em"><font color="#248d6c">سُوۡرَةُ النَّاس</font></strong><span style=""><br></span><strong>بِسۡمِ ٱللهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِيمِ</strong></h2>
        <div class="paragraph" style="text-align: center;"><font size="6">قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ (﻿١﻿)&nbsp;مَلِكِ ٱلنَّاسِ (﻿٢﻿)&nbsp;إِلَـٰهِ ٱلنَّاسِ (﻿٣﻿)&nbsp;مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ (﻿٤﻿)<br>&nbsp;ٱلَّذِى يُوَسۡوِسُ فِى صُدُورِ ٱلنَّاسِ (﻿٥﻿)&nbsp;مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ (﻿٦﻿)<br></font><br></div></td>
        <audio class="audio-ctrl" src="audios/An Nass.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"></font><font color="#248d6c">Sourate An-Nass (Les Hommes)</font></strong><br><p style="font-size: medium;">Au nom d’Allah, le Tout Miséricordieux, le Très Miséricordieux.</p></h2>
        <p style="text-align:center; font-weight: 400; font-size: 1.5em;">(1) Dis : "Je cherche protection auprès du Seigneur des hommes. <br>(2) Le Souverain des hommes,<br>(3) Dieu des hommes, <br> (4) contre le mal du mauvais conseiller, furtif, <br>(5) qui souffle le mal dans les poitrines des hommes,<br>(6) qu'il [le conseiller] soit un djinn, ou un être humain".</p>
        <p style="font-weight: 100;">Jami at-Tirmidhi (3575)</p>
    `;
    document.getElementById("card5").className = "card card-sleep";
    document.getElementById("card5").innerHTML = `
        <h3>1 fois</h3>
        <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"><strong>&nbsp;</strong></font><strong style="font-weight: 600; font-size: 1.5em"><font color="#248d6c"> سُورَةَ السَّجْدَةِ </font></strong><span style=""><br></span><strong>بِسۡمِ ٱللهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِيمِ</strong></h2>
        <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"></font><font color="#248d6c">Sourate As-Sajdah (La Prosternation)</font></strong><br><p style="font-size: medium;">Au nom d’Allah, le Tout Miséricordieux, le Très Miséricordieux.</p></h2>
        <iframe width="80%" height="720" src="https://www.youtube.com/embed/36vUAfEwJIE" title="Sourate As-Sajda - La prosternation (32) Wadi Al-Yamani | vostfr" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p style="font-weight: 100;">Jami at-Tirmidhi (3404)</p>

    `;
    document.getElementById("card6").className = "card card-sleep";
    document.getElementById("card6").innerHTML = `
        <h3>1 fois</h3>
        <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"><strong>&nbsp;</strong></font><strong style="font-weight: 600; font-size: 1.5em"><font color="#248d6c"> سُورَةَالمُلْكِ </font></strong><span style=""><br></span><strong>بِسۡمِ ٱللهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِيمِ</strong></h2>
        <h2 class="wsite-content-title" style="text-align:center;"><font color="#248d6c"></font><font color="#248d6c">Sourate Al-Mulk (La Royauté)</font></strong><br><p style="font-size: medium;">Au nom d’Allah, le Tout Miséricordieux, le Très Miséricordieux.</p></h2>
        <iframe width="80%" height="720" src="https://www.youtube.com/embed/lmufFGHBUUk" title="Sourate Al-Mulk #67 | Arabe et traduction en Français" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p style="font-weight: 100;">Jami at-Tirmidhi (3404)</p>

    `;

    document.getElementById("card7").className = "card card-sleep";
    document.getElementById("card7").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَ أَحْيَا</p>
        <audio class="audio-ctrl" src="audios/بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَ أَحْيَا.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">C’est en Ton nom, Ô Allah, que je meurs et que je vis.</p>
        <p style="font-weight: 100;">Mukhtasar Al-Bukhârî n° 2425</p>
    `;

    document.getElementById("card8").className = "card card-sleep";
    document.getElementById("card8").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَ بِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَ إِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ</p>
        <audio class="audio-ctrl" src="audios/بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">C’est en Ton nom, Seigneur que je me couche, et en Ton nom que je me lève. Si Tu retiens mon âme, alors fais-lui miséricorde ; et si Tu la renvoies [dans mon corps], protège-la donc de la manière dont Tu protèges Tes pieux serviteurs.</p>
        <p style="font-weight: 100;">Al-Bukhârî n° 6320</p>
    `;

    document.getElementById("card9").className = "card card-sleep";
    document.getElementById("card9").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em" dir="rtl">اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَوَاتِ وَالأَرْضِ رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ أَشْهَدُ أنْ لاَ إِلَهَ إِلاَّ أَنْتَ أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ الشَّيْطَانِ وَشَرَكِهِ وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ</p>
        <audio class="audio-ctrl" src="audios/اللَّهُمَّ فَاطِرَ السَّمَوَاتِ وَالأَرْضِ.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Ô Allah ! Connaisseur de l’invisible et de l’apparent, Créateur des cieux et de la Terre, Seigneur et Possesseur de toute chose, j’atteste qu’il n’y a aucune divinité [digne d’être adorée] en dehors de Toi, je cherche refuge auprès de Toi contre le mal de mon âme, contre le mal de Satan et de son polythéisme et contre le fait de me faire du mal à moi-même ou d’en faire à un musulman.</p>
        <p style="font-weight: 100;">Jami at-Tirmidhi (3529)</p>
    `;

    document.getElementById("card10").className = "card card-sleep";
    document.getElementById("card10").innerHTML = `
        <h3>3 fois</h3>
        <p style="font-weight: 600; font-size: 2em">اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ</p>
        <audio class="audio-ctrl" src="audios/اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Ô Allah ! Épargne-moi Ton châtiment le jour où Tu ressusciteras Tes serviteurs ! </p>
        <p style="font-weight: 100;">As-Sahîhah n° 2754</p>
    `;

    document.getElementById("card11").className = "card card-sleep";
    document.getElementById("card11").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">الحَمْدُ للهِ الَّذِي أَطْعَمَنَا وَ سَقَانَا، وَ كَفَانَا، وَ آوَانَا، فَكَمْ مِمَّنْ لاَ كَافِيَ لَهُ وَ لاَ مُؤْوِيَ</p>
        <audio class="audio-ctrl" src="audios/الحَمْدُ للهِ الَّذِي أَطْعَمَنَا وَ سَقَانَا.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;"> Louange à Allah qui nous a nourris, abreuvés, a suffit [à tous nos besoins] et nous a abrités ; alors que nombreux sont ceux qui n’ont personne pour les suffire et les abriter</p>
        <p style="font-weight: 100;">Mukhtasar Muslim n° 1901</p>
    `;

    document.getElementById("card12").className = "card card-sleep";
    document.getElementById("card12").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">اللَّهُمَّ إِنَّكَ خَلَقْتَ نَفْسِي وَ أَنْتَ تَوَفَّاهَا لَكَ مَمَاتُهَا وَ مَحْيَاهَا، إِنْ أَحْيَيْتَهَا فاحْفَظْهَا ، وَ إِنْ أَمَتَّهَا فَاغْفِرْ لَهَا. اللَّهُمَّ إِنَّي أَسْأَلُكَ العَافِيَةَ</p>
        <audio class="audio-ctrl" src="audios/اللَّهُمَّ إِنَّكَ خَلَقْتَ نَفْسِي وَ أَنْتَ تَوَفَّاهَا.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Ô Allah ! C’est Toi qui a créé mon âme et c’est Toi qui la reprend, c’est à Toi que reviennent sa mort et sa vie. Si Tu la laisses vivre, protège-la et si Tu la fais mourir pardonne-lui. Ô Allah ! Je Te demande de m’accorder la [bonne] santé.</p>
        <p style="font-weight: 100;">Mukhtasar Muslim n° 1898</p>
    `;

    document.getElementById("card13").className = "card card-sleep";
    document.getElementById("card13").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَ وَجَّهْتُ وَجْهِي إِلَيْكَ، وَ فَوَّضْتُ أَمْرِي إِلَيْكَ، وَ أَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَ رَهْبَةً إِلَيْكَ، لاَ مَلْجَأَ وَ لاَ مَنْجَا مِنْكَ إِلاَّ إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ وَ بِنَبِيِّكَ الَّذِي أَرْسَلْتَ</p>
        <audio class="audio-ctrl" src="audios/اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ.mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Ô Allah ! Je me suis soumis à Toi, je T’ai confié toutes mes affaires. Je m’en suis remis à Toi en toute chose. Je m’oriente vers Toi par amour et par crainte. Il n’existe aucun refuge contre Toi sauf auprès de Toi. J’ai cru au Livre que Tu as descendu et au Prophète que Tu as envoyé.</p>
        <p style="font-weight: 100;">Mukhtasar Al-Bukhârî n° 2426</p>
    `;

    document.getElementById("card14").className = "card card-sleep";
    document.getElementById("card14").innerHTML = `
    <h3>1 fois</h3>
    <p style="font-weight: 600; font-size: 2em">اللهم ربَّ السماواتِ وربَّ الأرض وربَّ العرش العظيم، ربَّنا وربِّ كلِّ شيء، فالقَ الحَبِّ والنَّوى، ومُنْزِلَ التوراة والإنجيل والفُرقان، أعوذ بك من شرِّ كل شيء أنت آخذٌ بناصيتِه، اللهم أنت الأولُ فليس قبلك شيء، وأنت الآخرُ فليس بعدك شيء، وأنت الظاهرُ فليس فوقك شيء، وأنت الباطن فليس دونك شيء، اقضِ عنَّا الدِّينَ، وأغنِنا من الفقر</p>
    <audio class="audio-ctrl" src="audios/اللَّهُمَّ رَبَّ السَّمَوَاتِ وَرَبَّ الأَرْضِ وَرَبَّ الْعَرْشِ الْعَظِيمِ.mp3" controls>
        Votre navigateur ne supporte pas l'élément audio.
    </audio>
    <p style="font-weight: 400; font-size: 1.5em;">Ô Allah ! Seigneur des Cieux, Seigneur de la Terre et Seigneur du Trône immense ! Notre Seigneur et Seigneur de toute chose ! Toi qui fends le grain et le noyau ! Toi qui as fait descendre la Thorah, l’Évangile et le Discernement ! Je me réfugie auprès de toi contre toute chose que tu tiens par le toupet. Ô Allah ! Tu es le Premier, rien n’est avant Toi ! Tu es le Dernier, rien n’est après Toi ! Tu es l’Apparent, rien n’est au-dessus de Toi, Tu es le Caché, rien n’est au-dessous de Toi. Acquitte nos dettes et affranchis-nous de la pauvreté !</p>
    <p style="font-weight: 100;">Sahîh Muslim</p>
    `;

    document.getElementById("card17").className = "card card-sleep";
    document.getElementById("card17").innerHTML = `
        <h3>1 fois</h3>
        <p style="font-weight: 600; font-size: 2em">لا إله إلا اللهُ وحده لا شريك له ، له الملكُ ، وله الحمدُ ، وهو على كلِّ شيءٍ قديرٌ ، لاحولَ ولا قوةَ إلا بالله العليِّ العظيمِ ، سبحان اللهِ، والحمدُ لله ، ولا إله إلا اللهُ ، واللهُ أكبرُ</p>
        <audio class="audio-ctrl" src="audios/من قال حين يأوي إلى فراشه_لا إله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كلِ شيء (mp3cut.net).mp3" controls>
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
        <p style="font-weight: 400; font-size: 1.5em;">Il n'y a pas de divinité méritant d'être adorée si ce n'est Allah seul sans associé, à Lui la royauté et la louange et Il est puissant sur toute chose. Il n'y a de force et de puissance que par Allah, gloire à Allah, louange à Allah et il n'y a pas de divinité méritant d'être adorée si ce n'est Allah et Allah est le plus grand</p>
        <p style="font-weight: 100;">Ibn Hibban Sahih n°5528</p>
    `;
    document.getElementById("card25").className = "card card-sleep";

}