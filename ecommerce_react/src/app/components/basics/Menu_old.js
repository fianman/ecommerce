import React from 'react'
require('../../../assets/css/Menu.css');

class Menu extends React.Component {

  render() {
    return(
      <div className="container-fluid">
        <div className="row megamenu">
            <div className="megamenu-content">
                <ul className="mega-list">
                    <li className="megamenu-menu-fixed megamenu-icon megamenu-search auth">
                        <a>fi</a>
                    </li>
                    <li className="megamenu-menu-fixed megamenu-icon">
                        <a href="/">[]</a>
                    </li>
                    <li className="col-xs-2 col-sm-2 megamenu-menu auth"> 
                        <a className="mega-title" href="/coffee-and-beverages">Coffee & Beverages</a>
                        <div className="menu-content">
                            <div className="row">
                                <div className="col-xs-3 menu-category">
                                    <div className="media">
                                        <a href="/single-origin">
                                            <div className="media-left ">
                                                <span className="sprite-megamenu single-origin"></span>
                                            </div>
                                            <div className="media-body">
                                                Single Origin
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xs-3 menu-category">
                                    <div className="media">
                                        <a href="/ninety-plus-coffee">
                                            <div className="media-left ">
                                                <span className="sprite-megamenu single-origin"></span>
                                            </div>
                                            <div className="media-body">
                                                Ninety Plus Coffee 
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xs-3 menu-category">
                                    <div className="media">
                                        <a href="/capsules">
                                            <div className="media-left ">
                                                <span className="sprite-megamenu single-origin"></span>
                                            </div>
                                            <div className="media-body">
                                                Capsules 
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xs-3 menu-category">
                                    <div className="media">
                                        <a href="/commercial">
                                            <div className="media-left ">
                                                <span className="sprite-megamenu single-origin"></span>
                                            </div>
                                            <div className="media-body">
                                                Commercial 
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xs-3 menu-category">
                                    <div className="media">
                                        <a href="/powder">
                                            <div className="media-left ">
                                                <span className="sprite-megamenu single-origin"></span>
                                            </div>
                                            <div className="media-body">
                                                Powder  
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xs-3 menu-category">
                                    <div className="media">
                                        <a href="/drip-coffee">
                                            <div className="media-left ">
                                                <span className="sprite-megamenu single-origin"></span>
                                            </div>
                                            <div className="media-body">
                                                Drip Coffee  
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="col-xs-2 col-sm-2 megamenu-menu auth">
                        <a className="mega-title" href="/equipment">Equipment</a>
                        <div className="menu-content">
                            <div className="row">
                                <div className="col-xs-3 no-padding">
                                    <div className="menu-category-title border-bottom">
                                        <a href="/espresso-machines"> Espresso Machines </a>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 menu-category">
                                            <div className="media">
                                                <a href="/automatic-machine">
                                                    <div className="media-left ">
                                                        <span className="sprite-megamenu automatic-machine"></span>
                                                    </div>
                                                    <div className="media-body">
                                                        Automatic Machine 
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 menu-category">
                                            <div className="media">
                                                <a href="/coffee-maker">
                                                    <div className="media-left ">
                                                        <span className="sprite-megamenu coffee-maker"></span>
                                                    </div>
                                                    <div className="media-body">
                                                        Coffee Maker 
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 menu-category">
                                            <div className="media">
                                                <a href="/manual-semi-automatic">
                                                    <div className="media-left ">
                                                        <span className="sprite-megamenu manual-semi"></span>
                                                    </div>
                                                    <div className="media-body">
                                                        Manual / Semi Automatic 
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 menu-category">
                                            <div className="media">
                                                <a href="/spareparts">
                                                    <div className="media-left ">
                                                        <span className="sprite-megamenu sparepart"></span>
                                                    </div>
                                                    <div className="media-body">
                                                        Spareparts 
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-3 no-padding menu-striped">  
                                    <div className="menu-category-title">
                                        <a href="/coffee-grinders"> Coffee Grinders </a>
                                    </div>  
                                    <div className="row">   
                                        <div className="col-sm-12 menu-category">
                                            <div className="media">
                                                <a href="/electric-grinder">
                                                    <div className="media-left ">
                                                        <span className="sprite-megamenu automatic-grinder"></span>
                                                    </div>
                                                    <div className="media-body"> Electric Grinder </div>
                                                </a>
                                            </div>
                                        </div>     
                                        <div className="col-sm-12 menu-category">
                                            <div className="media">
                                                <a href="/manual-grinder">
                                                    <div className="media-left ">
                                                        <span className="sprite-megamenu manual-grinder"></span>
                                                    </div>
                                                    <div className="media-body"> Manual Grinder </div>
                                                </a>
                                            </div>
                                        </div>     
                                        <div className="col-sm-12 menu-category">
                                            <div className="media">
                                                <a href="/grinder-spareparts">
                                                    <div className="media-left ">
                                                        <span className="sprite-megamenu grinder-sparepart"></span>
                                                    </div>
                                                    <div className="media-body"> Grinder Spareparts </div>
                                                </a>
                                            </div>
                                        </div>   
                                        <div className="light-bg">   
                                            <div className="col-sm-12 menu-category">
                                                <div className="media">
                                                    <a href="/pulper">
                                                        <div className="media-left ">
                                                            <span className="sprite-megamenu pulper"></span>
                                                        </div>
                                                        <div className="media-body"> Pulper </div>
                                                    </a>
                                                </div>
                                            </div>  
                                         </div>
                                    </div>
                                </div>
                                <div className="col-xs-3 no-padding">  
                                    <div className="menu-category-title border-bottom">
                                        <a href="/other-equipments"> Others </a>
                                    </div>  
                                    <div className="row">   
                                        <div className="col-sm-12 menu-category">
                                            <div className="media">
                                                <a href="/water-boiler">
                                                    <div className="media-left ">
                                                        <span className="sprite-megamenu water-boiler"></span>
                                                    </div>
                                                    <div className="media-body"> Water Boiler </div>
                                                </a>
                                            </div>
                                        </div>     
                                        <div className="col-sm-12 menu-category">
                                            <div className="media">
                                                <a href="/blenders-and-smoothers">
                                                    <div className="media-left ">
                                                        <span className="sprite-megamenu blender-smoother"></span>
                                                    </div>
                                                    <div className="media-body"> Blenders &amp; Smoothers </div>
                                                </a>
                                            </div>
                                        </div>     
                                        <div className="col-sm-12 menu-category">
                                            <div className="media">
                                                <a href="/jug-rinser">
                                                    <div className="media-left ">
                                                        <span className="sprite-megamenu jug-rinser"></span>
                                                    </div>
                                                    <div className="media-body"> Jug Rinser </div>
                                                </a>
                                            </div>
                                        </div>     
                                        <div className="col-sm-12 menu-category">
                                            <div className="media">
                                                <a href="/water-pump">
                                                    <div className="media-left ">
                                                        <span className="sprite-megamenu water-pump"></span>
                                                    </div>
                                                    <div className="media-body"> Water Pump </div>
                                                </a>
                                            </div>
                                        </div>   
                                    </div>
                                </div>
                                <div className="col-xs-3 no-padding">
                                    <div className="menu-category-title"></div>
                                    <div className="row">  
                                        <div className="col-sm-12 menu-category">
                                            <a href="https://ottencoffee.co.id/equipment">
                                                <img src="https://s-ecom.ottenstatic.com/original/5ad6ed2752231518858480.png" width="100%" alt="Equipments"/>
                                            </a>
                                        </div>  
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </li>
                    <li class="col-xs-2 col-sm-2 megamenu-menu ">   
                        <a class="mega-title" href="/brewers">Brewers</a>   
                        <div class="menu-content">
                            <div class="row">
                                <div class="col-xs-3 no-padding">  
                                    <div class="menu-category-title border-bottom">
                                        <a href="/manual-brew"> Manual Brew </a>
                                    </div>  
                                <div class="row">   
                                    <div class="col-sm-12 menu-category">
                                        <div class="media">
                                            <a href="/aeropress">
                                                <div class="media-left ">
                                                    <span class="sprite-megamenu aeropress"></span>
                                                </div>
                                                <div class="media-body"> Aeropress </div>
                                            </a>
                                        </div>
                                    </div>     
                                    <div class="col-sm-12 menu-category">
                                        <div class="media">
                                            <a href="/all-in-one-coffeemaker">
                                                <div class="media-left ">
                                                    <span class="sprite-megamenu all-in-one-coffee-maker"></span>
                                                </div>
                                                <div class="media-body"> All in One Coffeemaker </div>
                                            </a>
                                        </div>
                                    </div>     
                                    <div class="col-sm-12 menu-category">
                                        <div class="media">
                                            <a href="/cold-brewers">
                                                <div class="media-left ">
                                                    <span class="sprite-megamenu cold-brewers"></span>
                                                </div>
                                                <div class="media-body"> Cold Brewers </div>
                                            </a>
                                        </div>
                                    </div>     
                                    <div class="col-sm-12 menu-category">
                                        <div class="media">
                                            <a href="/chemex">
                                                <div class="media-left ">
                                                    <span class="sprite-megamenu chemex"></span>
                                                </div>
                                                <div class="media-body"> Chemex </div>
                                            </a>
                                        </div>
                                    </div>     
                                    <div class="col-sm-12 menu-category">
                                        <div class="media">
                                            <a href="/cloth-filter">
                                                <div class="media-left ">
                                                    <span class="sprite-megamenu cloth-filter"></span>
                                                </div>
                                                <div class="media-body"> Cloth Filter </div>
                                            </a>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                            <div class="col-xs-3 no-padding">
                                <div class="menu-category-title border-bottom"></div>
                                <div class="row">   
                                    <div class="col-sm-12 menu-category">
                                        <div class="media">
                                            <a href="/espresso-maker">
                                                <div class="media-left ">
                                                    <span class="sprite-megamenu espresso-maker"></span>
                                                </div>
                                                <div class="media-body"> Espresso Maker </div>
                                            </a>
                                        </div>
                                    </div>     
                                    <div class="col-sm-12 menu-category">
                                        <div class="media">
                                            <a href="/eva-solo">
                                                <div class="media-left ">
                                                    <span class="sprite-megamenu eva-solo"></span>
                                                </div>
                                                <div class="media-body"> Eva Solo </div>
                                            </a>
                                        </div>
                                    </div>     
                                    <div class="col-sm-12 menu-category">
                                        <div class="media">
                                            <a href="/frenchpress">
                                                <div class="media-left ">
                                                    <span class="sprite-megamenu frenchpress"></span>
                                                </div>
                                                <div class="media-body"> Frenchpress </div>
                                            </a>
                                        </div>
                                    </div>     
                                    <div class="col-sm-12 menu-category">
                                        <div class="media">
                                            <a href="/mokapot">
                                                <div class="media-left ">
                                                    <span class="sprite-megamenu mokapot"></span>
                                                </div>
                                                <div class="media-body"> Mokapot </div>
                                            </a>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                            <div class="col-xs-3 no-padding">
                                <div class="menu-category-title border-bottom"></div>
                                <div class="row">   
                                    <div class="col-sm-12 menu-category">
                                        <div class="media">
                                            <a href="/pour-over">
                                                <div class="media-left ">
                                                    <span class="sprite-megamenu pour-over"></span>
                                                </div>
                                                <div class="media-body"> Pour Over </div>
                                            </a>
                                        </div>
                                    </div>     
                                    <div class="col-sm-12 menu-category">
                                        <div class="media">
                                            <a href="/syphon">
                                                <div class="media-left ">
                                                    <span class="sprite-megamenu syphon"></span>
                                                </div>
                                                <div class="media-body"> Syphon </div>
                                            </a>
                                        </div>
                                    </div>     
                                    <div class="col-sm-12 menu-category">
                                        <div class="media">
                                            <a href="/turkish">
                                                <div class="media-left ">
                                                    <span class="sprite-megamenu turkish"></span>
                                                </div>
                                                <div class="media-body"> Turkish </div>
                                            </a>
                                        </div>
                                    </div>     
                                    <div class="col-sm-12 menu-category">
                                        <div class="media">
                                            <a href="/vietnam-drip">
                                                <div class="media-left ">
                                                    <span class="sprite-megamenu vietnam-drip"></span>
                                                </div>
                                                <div class="media-body"> Vietnam Drip </div>
                                            </a>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                            <div class="col-xs-3 no-padding menu-striped">  
                                <div class="menu-category-title">
                                    <a href="/other-brewers"> Others </a>
                                </div>  
                                <div class="row">   
                                    <div class="col-sm-12 menu-category">
                                        <div class="media">
                                            <a href="/filters">
                                                <div class="media-left ">
                                                    <span class="sprite-megamenu filters"></span>
                                                </div>
                                                <div class="media-body"> Filters </div>
                                            </a>
                                        </div>
                                    </div>    
                                    <div class="col-sm-12 menu-category">
                                        <div class="media">
                                            <a href="/kettles">
                                                <div class="media-left ">
                                                    <span class="sprite-megamenu kettles"></span>
                                                </div>
                                                <div class="media-body"> Kettles </div>
                                            </a>
                                        </div>
                                    </div>     
                                    <div class="col-sm-12 menu-category">
                                        <div class="media">
                                            <a href="/manual-brew-parts">
                                                <div class="media-left ">
                                                    <span class="sprite-megamenu manual-brew-parts"></span>
                                                </div>
                                                <div class="media-body"> Manual Brew Parts </div>
                                            </a>
                                        </div>
                                    </div>     
                                    <div class="col-sm-12 menu-category">
                                        <div class="media">
                                            <a href="/stands">
                                                <div class="media-left ">
                                                    <span class="sprite-megamenu stands"></span>
                                                </div>
                                                <div class="media-body"> Stands </div>
                                            </a>
                                        </div>
                                    </div>    
                                    <div class="col-sm-12 menu-category">
                                        <div class="media">
                                            <a href="/scales">
                                                <div class="media-left ">
                                                    <span class="sprite-megamenu scales"></span>
                                                </div>
                                                <div class="media-body"> Scales </div>
                                            </a>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default Menu
