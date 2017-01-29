/* 
 * TransparentCard design demo    
 * Sanggyeong Jo                    
 * Jan 24. 2017                     
 *                                  
 * Contacts                         
 * Github : github.com/byeolbit     
 * Email : info@byeolbit.com        
 *         sanggyeong.jo@gmail.com
 *
 * You can find this project at https://github.com/byeolbit/transparentCard
 */  

$(document).ready(function(){
    var $demoCard = $('#cw'),
        background = '.tl-contents',
        $targetBg = $(background),
        filterValue = 5,
        cardColor = 'white',
        draggable = true,
        shadow = true,
        bgAttach;

    var $card = $demoCard.children('.tl-card'),
        $cardBg = $demoCard.children('.tl-card-bg-container').
                            children('.tl-card-bg');

    var $bBg = $('#bBg'),
        $bBlur = $('#bBlur'),
        $bFix = $('#bFix'),
        $bTog = $('#bTog'),
        $bNum = $('#bNum');

    var bgImages = ['url("img/bg1.jpg")',
                    'url("img/bg2.jpg")',
                    'url("img/bg3.jpg")',
                    'url("img/bg4.jpg")',
                    'url("img/bg5.jpg")',
                    'url("img/bg6.jpg")'
                    ];

    if( $targetBg.css('background-attachment') == 'fixed' )
        bgAttach = true;
    else
        bgAttach = false;

    $demoCard.position({
        my: 'center',
        at: 'center',
        of: '#bgEl'
    });
    applyOption($demoCard, background,
                filterValue, cardColor, draggable, shadow);

    $bNum.attr('placeholder',filterValue);

    $bBlur.click(function(){
        filterValue = $bNum.val();
        applyOption($demoCard, background,
                    filterValue, cardColor, draggable, shadow);
    });

    $bBg.click(function(){
        var t = $targetBg.css('background-attachment');
        $targetBg.css('background',
                      bgImages[Math.floor((Math.random() * 10))%6]);
        $targetBg.css('background-attachment',t);
        applyOption($demoCard, background,
                    filterValue, cardColor, draggable, shadow);
    });

    $bFix.click(function(){
        if (!bgAttach){
            //var s = $targetBg.css('background-position');
            $targetBg.css('background-attachment','fixed');
            $cardBg.css('background-position','0px 0px');
            $bFix.text('Background fix off');
        }
        else {
            $targetBg.css('background-attachment','inherit');
            $bFix.text('Background fix on');
        }
        
        bgAttach = !bgAttach;
        
        applyOption($demoCard, background,
                    filterValue, cardColor, draggable, shadow);
    });

    var $cb1 = $('#cb1'),
        $cb2 = $('#cb2'),
        $cb3 = $('#cb3'),
        $cb4 = $('#cb4'),
        $cc = $('.tl-card-contents');

    $cb1.click(function(){
        $cc.css('background-color','rgba(255,255,255,0.4)');
        cardColor = $cc.css('background-color');
    });
    $cb2.click(function(){
        $cc.css('background-color','rgba(120,120,120,0.4)');
        cardColor = $cc.css('background-color');
    });
    $cb3.click(function(){
        $cc.css('background-color','rgba(30,30,30,0.7)');
        cardColor = $cc.css('background-color');
    });
    $cb4.click(function(){
        $cc.css('background-color','rgba(0,0,0,0)');
        cardColor = $cc.css('background-color');
    });

    $maxBtn = $('.wide-button');
    $contents = $('.contents');

    $maxBtn.click(function(){
        if ($maxBtn.text() == '+') {
            $contents.addClass('wide');
            $targetBg.addClass('wide');
            $maxBtn.removeClass('align-right');
            $maxBtn.text('-');
            $demoCard.position({
                my: 'center',
                at: 'center',
                of: '#bgEl'
            });
            applyOption($demoCard, background,
                        filterValue, cardColor, draggable, shadow);
        } else {
            $contents.removeClass('wide');
            $targetBg.removeClass('wide');
            $maxBtn.addClass('align-right');
            $maxBtn.text('+');
            $demoCard.position({
                my: 'center',
                at: 'center',
                of: '#bgEl'
            });
            applyOption($demoCard, background,
                        filterValue, cardColor, draggable, shadow);
        }
    });
});

function applyOption($dc, bg, fv, cc, d, s){
    $dc.translucent(bg,{
        filterValue : fv,
        cardColor : cc,
        draggable : d,
        shadow : s
    });
}