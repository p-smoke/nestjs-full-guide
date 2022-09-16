'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">prisma-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-2938e129f8874079ae2a4e97b8a5a6fb730c173b2a135ab4d5bb0031d344af6b7e22472dc3ccba1698b955e2b25789e16d8c68da9fc224cae9dbfca55cfb5050"' : 'data-target="#xs-controllers-links-module-AuthModule-2938e129f8874079ae2a4e97b8a5a6fb730c173b2a135ab4d5bb0031d344af6b7e22472dc3ccba1698b955e2b25789e16d8c68da9fc224cae9dbfca55cfb5050"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-2938e129f8874079ae2a4e97b8a5a6fb730c173b2a135ab4d5bb0031d344af6b7e22472dc3ccba1698b955e2b25789e16d8c68da9fc224cae9dbfca55cfb5050"' :
                                            'id="xs-controllers-links-module-AuthModule-2938e129f8874079ae2a4e97b8a5a6fb730c173b2a135ab4d5bb0031d344af6b7e22472dc3ccba1698b955e2b25789e16d8c68da9fc224cae9dbfca55cfb5050"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-2938e129f8874079ae2a4e97b8a5a6fb730c173b2a135ab4d5bb0031d344af6b7e22472dc3ccba1698b955e2b25789e16d8c68da9fc224cae9dbfca55cfb5050"' : 'data-target="#xs-injectables-links-module-AuthModule-2938e129f8874079ae2a4e97b8a5a6fb730c173b2a135ab4d5bb0031d344af6b7e22472dc3ccba1698b955e2b25789e16d8c68da9fc224cae9dbfca55cfb5050"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-2938e129f8874079ae2a4e97b8a5a6fb730c173b2a135ab4d5bb0031d344af6b7e22472dc3ccba1698b955e2b25789e16d8c68da9fc224cae9dbfca55cfb5050"' :
                                        'id="xs-injectables-links-module-AuthModule-2938e129f8874079ae2a4e97b8a5a6fb730c173b2a135ab4d5bb0031d344af6b7e22472dc3ccba1698b955e2b25789e16d8c68da9fc224cae9dbfca55cfb5050"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PostsModule-6f1a3b1083619d8970f69555a3364b8a66b5b948801ed65838cbbd8a8c531b4073e2724b364306c6c375775bfe8bc893aba13e167d7ee6542c3cbeb925319352"' : 'data-target="#xs-controllers-links-module-PostsModule-6f1a3b1083619d8970f69555a3364b8a66b5b948801ed65838cbbd8a8c531b4073e2724b364306c6c375775bfe8bc893aba13e167d7ee6542c3cbeb925319352"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-6f1a3b1083619d8970f69555a3364b8a66b5b948801ed65838cbbd8a8c531b4073e2724b364306c6c375775bfe8bc893aba13e167d7ee6542c3cbeb925319352"' :
                                            'id="xs-controllers-links-module-PostsModule-6f1a3b1083619d8970f69555a3364b8a66b5b948801ed65838cbbd8a8c531b4073e2724b364306c6c375775bfe8bc893aba13e167d7ee6542c3cbeb925319352"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PostsModule-6f1a3b1083619d8970f69555a3364b8a66b5b948801ed65838cbbd8a8c531b4073e2724b364306c6c375775bfe8bc893aba13e167d7ee6542c3cbeb925319352"' : 'data-target="#xs-injectables-links-module-PostsModule-6f1a3b1083619d8970f69555a3364b8a66b5b948801ed65838cbbd8a8c531b4073e2724b364306c6c375775bfe8bc893aba13e167d7ee6542c3cbeb925319352"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-6f1a3b1083619d8970f69555a3364b8a66b5b948801ed65838cbbd8a8c531b4073e2724b364306c6c375775bfe8bc893aba13e167d7ee6542c3cbeb925319352"' :
                                        'id="xs-injectables-links-module-PostsModule-6f1a3b1083619d8970f69555a3364b8a66b5b948801ed65838cbbd8a8c531b4073e2724b364306c6c375775bfe8bc893aba13e167d7ee6542c3cbeb925319352"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' : 'data-target="#xs-injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' :
                                        'id="xs-injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-2c76881ec271572271372237319bf5091fa61f6acde271cfd824ee6ad5414af947b8d7eba30396784f643af6bded957ec89a1d15e5725d34cb6641c4da6105d1"' : 'data-target="#xs-controllers-links-module-UserModule-2c76881ec271572271372237319bf5091fa61f6acde271cfd824ee6ad5414af947b8d7eba30396784f643af6bded957ec89a1d15e5725d34cb6641c4da6105d1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-2c76881ec271572271372237319bf5091fa61f6acde271cfd824ee6ad5414af947b8d7eba30396784f643af6bded957ec89a1d15e5725d34cb6641c4da6105d1"' :
                                            'id="xs-controllers-links-module-UserModule-2c76881ec271572271372237319bf5091fa61f6acde271cfd824ee6ad5414af947b8d7eba30396784f643af6bded957ec89a1d15e5725d34cb6641c4da6105d1"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-2c76881ec271572271372237319bf5091fa61f6acde271cfd824ee6ad5414af947b8d7eba30396784f643af6bded957ec89a1d15e5725d34cb6641c4da6105d1"' : 'data-target="#xs-injectables-links-module-UserModule-2c76881ec271572271372237319bf5091fa61f6acde271cfd824ee6ad5414af947b8d7eba30396784f643af6bded957ec89a1d15e5725d34cb6641c4da6105d1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-2c76881ec271572271372237319bf5091fa61f6acde271cfd824ee6ad5414af947b8d7eba30396784f643af6bded957ec89a1d15e5725d34cb6641c4da6105d1"' :
                                        'id="xs-injectables-links-module-UserModule-2c76881ec271572271372237319bf5091fa61f6acde271cfd824ee6ad5414af947b8d7eba30396784f643af6bded957ec89a1d15e5725d34cb6641c4da6105d1"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AllPostsArgsDto.html" data-type="entity-link" >AllPostsArgsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthSignInDto.html" data-type="entity-link" >AuthSignInDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthSignUpDto.html" data-type="entity-link" >AuthSignUpDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtGuard.html" data-type="entity-link" >JwtGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});