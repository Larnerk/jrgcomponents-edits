"use strict";(self.webpackChunkjrgcomponents=self.webpackChunkjrgcomponents||[]).push([[708],{"./src/AppWrapper/AppWrapper.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DoubleMenuDoubleLayer:()=>DoubleMenuDoubleLayer,DoubleMenuSingleLayer:()=>DoubleMenuSingleLayer,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AppWrapper_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),HeaderFooter=__webpack_require__("./src/AppWrapper/HeaderFooter.tsx"),Drawer_Drawer=__webpack_require__("./node_modules/@mui/material/Drawer/Drawer.js"),List=__webpack_require__("./node_modules/@mui/material/List/List.js"),ListItem=__webpack_require__("./node_modules/@mui/material/ListItem/ListItem.js"),ListItemText=__webpack_require__("./node_modules/@mui/material/ListItemText/ListItemText.js"),__jsx=react.createElement;function MenuSWR(_ref){var swr=_ref.swr,menu=_ref.menu;return swr&&swr.isLoading?__jsx(ListItem.Ay,null,__jsx(ListItemText.A,null,__jsx(Typography.A,{variant:"h6",component:"h1",noWrap:!0,sx:{fontWeight:"bold"}},"Loading..."))):swr&&swr.error?__jsx(react.Fragment,null,__jsx(ListItem.Ay,null,__jsx(ListItemText.A,null,__jsx(Typography.A,{variant:"h6",component:"h1",noWrap:!0,sx:{fontWeight:"bold"}},"Error!"))),__jsx(ListItem.Ay,null,__jsx(ListItemText.A,null,__jsx(Typography.A,{paragraph:!0,component:"p"},swr.error.message)))):menu({data:null==swr?void 0:swr.data})}try{MenuSWR.displayName="MenuSWR",MenuSWR.__docgenInfo={description:"",displayName:"MenuSWR",props:{swr:{defaultValue:null,description:"",name:"swr",required:!0,type:{name:"any"}},menu:{defaultValue:null,description:"",name:"menu",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/SWR/MenuSWR.tsx#MenuSWR"]={docgenInfo:MenuSWR.__docgenInfo,name:"MenuSWR",path:"src/SWR/MenuSWR.tsx#MenuSWR"})}catch(__react_docgen_typescript_loader_error){}var Drawer_jsx=react.createElement;function PopoutDrawer(_ref){var open=_ref.open,side=_ref.side,width=_ref.width,menu=_ref.menu,swr=_ref.swr,topSpacing=_ref.topSpacing,bottomSpacing=_ref.bottomSpacing,zIndex=_ref.zIndex;return Drawer_jsx(Drawer_Drawer.Ay,{sx:{direction:"right"==side?"lrt":"rtl",width,flexShrink:0,zIndex,"& .MuiDrawer-paper":{height:"unset",width,boxSizing:"border-box",position:"absolute",bottom:null!=bottomSpacing?bottomSpacing:"0",left:"left"==side?"0":"unset",right:"right"==side?"0":"unset",top:topSpacing,overflowY:"auto"}},variant:"persistent",anchor:side,open},Drawer_jsx(List.A,{sx:{direction:"ltr",padding:"0"}},Drawer_jsx(MenuSWR,{swr,menu})))}PopoutDrawer.displayName="PopoutDrawer";try{Drawer.displayName="Drawer",Drawer.__docgenInfo={description:"",displayName:"Drawer",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"any"}},side:{defaultValue:null,description:"",name:"side",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"any"}},menu:{defaultValue:null,description:"",name:"menu",required:!0,type:{name:"any"}},swr:{defaultValue:null,description:"",name:"swr",required:!0,type:{name:"any"}},topSpacing:{defaultValue:null,description:"",name:"topSpacing",required:!0,type:{name:"string"}},edgeSpacing:{defaultValue:null,description:"",name:"edgeSpacing",required:!1,type:{name:"string"}},bottomSpacing:{defaultValue:null,description:"",name:"bottomSpacing",required:!1,type:{name:"string"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/AppWrapper/Drawer.tsx#Drawer"]={docgenInfo:Drawer.__docgenInfo,name:"Drawer",path:"src/AppWrapper/Drawer.tsx#Drawer"})}catch(__react_docgen_typescript_loader_error){}var IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),ChevronRight=__webpack_require__("./node_modules/@mui/icons-material/esm/ChevronRight.js"),ChevronLeft=__webpack_require__("./node_modules/@mui/icons-material/esm/ChevronLeft.js"),Button_jsx=react.createElement;function PopoutDrawerWrapperAppBarButton(_ref){var open=_ref.open,handleToggle=_ref.handleToggle,side=_ref.side,heading=_ref.heading,icon=_ref.icon;return Button_jsx(Box.A,{"aria-label":"open drawer",onClick:handleToggle,sx:{margin:"0 ".concat("right"===side?"1rem":"0"," 0 ").concat("left"===side?"1rem":"0"),justifyContent:"flex-end",display:"flex",alignItems:"center",cursor:"pointer",height:"100%",flexDirection:"left"==side?"row-reverse":"row"}},Button_jsx(IconButton.A,{edge:"start",color:"inherit",sx:{ml:"0.2rem"}},null!=icon?icon:Button_jsx("left"==side!==open?ChevronRight.A:ChevronLeft.A,null)),Button_jsx(Typography.A,{variant:"h6",component:"h1",noWrap:!0},heading))}PopoutDrawerWrapperAppBarButton.displayName="PopoutDrawerWrapperAppBarButton";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},handleToggle:{defaultValue:null,description:"",name:"handleToggle",required:!0,type:{name:"any"}},side:{defaultValue:null,description:"",name:"side",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/AppWrapper/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/AppWrapper/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var process=__webpack_require__("./node_modules/process/browser.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),AppWrapper_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function AppWrapper(_ref){var _header$components$le,_heading,_header$components$le2,_icon,_header$components$le3,_header$components$ri,_heading2,_header$components$ri2,_header$components$ri3,_header$components$le4,_header$components$ri4,_header$components$le5,_header$components$ri5,_ref$header=_ref.header,header=void 0===_ref$header?{height:"2rem",components:{center:process.env.NEXT_PUBLIC_APP_NAME}}:_ref$header,footer=_ref.footer,_ref$inner=_ref.inner,inner=void 0===_ref$inner||_ref$inner,children=_ref.children,_useState=(0,react.useState)({left:!1,right:!1}),open=_useState[0],setOpen=_useState[1],theme=(0,useTheme.A)();return(0,react.useEffect)((function(){console.log("Open State of popout changed: ",open)}),[open]),AppWrapper_jsx(react.Fragment,null,AppWrapper_jsx(HeaderFooter.A,{height:header.height,components:{left:null!==(_header$components$le=header.components.left)&&void 0!==_header$components$le&&_header$components$le.heading?AppWrapper_jsx(PopoutDrawerWrapperAppBarButton,{open:open.left,handleToggle:function handleToggle(){setOpen((function(previousState){return _objectSpread(_objectSpread({},previousState),{},{left:!previousState.left})}))},side:"left",heading:null!==(_heading=null===(_header$components$le2=header.components.left)||void 0===_header$components$le2?void 0:_header$components$le2.heading)&&void 0!==_heading?_heading:"",icon:null!==(_icon=null===(_header$components$le3=header.components.left)||void 0===_header$components$le3?void 0:_header$components$le3.icon)&&void 0!==_icon?_icon:null}):header.components.left,center:"string"==typeof header.components.center?AppWrapper_jsx(Typography.A,{variant:"h6",component:inner?"h2":"h1",textAlign:"center",noWrap:!0},header.components.center):AppWrapper_jsx(Box.A,{display:"flex",justifyContent:"space-between",alignItems:"center",height:"100%"},header.components.center),right:void 0!==(null===(_header$components$ri=header.components.right)||void 0===_header$components$ri?void 0:_header$components$ri.heading)?AppWrapper_jsx(PopoutDrawerWrapperAppBarButton,{open:open.right,handleToggle:function handleToggle(){setOpen((function(previousState){return _objectSpread(_objectSpread({},previousState),{},{right:!previousState.right})}))},side:"right",heading:null!==(_heading2=null===(_header$components$ri2=header.components.right)||void 0===_header$components$ri2?void 0:_header$components$ri2.heading)&&void 0!==_heading2?_heading2:"",icon:null===(_header$components$ri3=header.components.right)||void 0===_header$components$ri3?void 0:_header$components$ri3.icon}):header.components.right}}),(null===(_header$components$le4=header.components.left)||void 0===_header$components$le4?void 0:_header$components$le4.menu)&&AppWrapper_jsx(PopoutDrawer,(0,esm_extends.A)({open:open.left},header.components.left,{side:"left",zIndex:1200,topSpacing:header.height,bottomSpacing:footer?footer.height:"0"})),AppWrapper_jsx(Box.A,{component:inner?"main":"div",sx:{height:"calc(100% - ".concat(header.height,")"),flexGrow:1,position:"relative",overflowY:"auto",transition:theme.transitions.create("margin",{easing:theme.transitions.easing[open.left||open.right?"easeOut":"sharp"],duration:theme.transitions.duration[open.left||open.right?"enteringScreen":"leavingScreen"]}),margin:"0 ".concat(open.right?null===(_header$components$ri4=header.components.right)||void 0===_header$components$ri4?void 0:_header$components$ri4.width:0," 0 ").concat(open.left?null===(_header$components$le5=header.components.left)||void 0===_header$components$le5?void 0:_header$components$le5.width:0)}},children),(null===(_header$components$ri5=header.components.right)||void 0===_header$components$ri5?void 0:_header$components$ri5.menu)&&AppWrapper_jsx(PopoutDrawer,(0,esm_extends.A)({open:open.right},header.components.right,{side:"right",zIndex:1200,topSpacing:header.height,bottomSpacing:footer?footer.height:"0"})),footer&&AppWrapper_jsx(HeaderFooter.A,{components:footer.components,height:footer.height,footer:!0}))}try{AppWrapper.displayName="AppWrapper",AppWrapper.__docgenInfo={description:"",displayName:"AppWrapper",props:{header:{defaultValue:{value:"{\n    height: '2rem',\n    components: {\n      center: process.env.NEXT_PUBLIC_APP_NAME,\n    },\n  }"},description:"",name:"header",required:!1,type:{name:"HeaderFooterProps"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"HeaderFooterProps"}},inner:{defaultValue:{value:"true"},description:"",name:"inner",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:AppWrapper.__docgenInfo,name:"AppWrapper",path:"src/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(__react_docgen_typescript_loader_error){}var SwitchDark=__webpack_require__("./src/Theming/SwitchDark.tsx"),SwitchColorblind=__webpack_require__("./src/Theming/SwitchColorblind.tsx"),CenterAlignedBox=__webpack_require__("./src/Layout/CenterAlignedBox.tsx"),AppWrapper_stories_jsx=react.createElement,DoubleMenuSingleLayer=function DoubleMenuSingleLayer(args){return AppWrapper_stories_jsx(AppWrapper,args,AppWrapper_stories_jsx("p",null,"Page Contents"))};DoubleMenuSingleLayer.displayName="DoubleMenuSingleLayer",DoubleMenuSingleLayer.args={header:{components:{center:"Single Layer Menu",left:{heading:"Left Menu",swr:null,menu:function menu(){return AppWrapper_stories_jsx("div",null,"Left Menu Contents")},width:"20rem"},right:{heading:"Right Menu",swr:null,menu:function menu(){return AppWrapper_stories_jsx("div",null,"Right Menu Contents")},width:"20rem"}},height:"3rem"}};var DoubleMenuDoubleLayer=function DoubleMenuDoubleLayer(args){return AppWrapper_stories_jsx(AppWrapper,args.outer,AppWrapper_stories_jsx(AppWrapper,args.inner,AppWrapper_stories_jsx("p",null,"Page Contents")))};DoubleMenuDoubleLayer.displayName="DoubleMenuDoubleLayer",DoubleMenuDoubleLayer.args={inner:{header:{components:{center:"Inner Popout Menu",left:{heading:"Inner Left Menu",swr:null,menu:function menu(){return AppWrapper_stories_jsx("div",null,"Inner Left Menu Contents")},width:"20rem"},right:{heading:"Inner Right Menu",swr:null,menu:function menu(){return AppWrapper_stories_jsx("div",null,"Inner Right Menu Contents")},width:"20rem"}},height:"3rem",inner:!0}},outer:{header:{components:{center:AppWrapper_stories_jsx(CenterAlignedBox.A,{center:AppWrapper_stories_jsx(Typography.A,{variant:"h6",component:"h1",textAlign:"center",height:"100%"},"Outer Popout Menu"),right:AppWrapper_stories_jsx(react.Fragment,null,AppWrapper_stories_jsx(SwitchDark.A,null),AppWrapper_stories_jsx(SwitchColorblind.A,null))}),left:{heading:"Outer Left Menu",swr:null,menu:function menu(){return AppWrapper_stories_jsx("div",null,"Outer Left Menu Contents")},width:"20rem"},right:{heading:"Outer Right Menu",swr:null,menu:function menu(){return AppWrapper_stories_jsx("div",null,"Outer Right Menu Contents")},width:"20rem"}},height:"3rem"},footer:{components:{center:AppWrapper_stories_jsx(Typography.A,{key:"by",variant:"h6",component:"p",textAlign:"center",height:"100%"},"Created by Jameson Grieve")},height:"2rem"}}};const AppWrapper_stories={title:"Application/AppWrapper",component:AppWrapper,tags:["autodocs"],parameters:{componentSubtitle:"A Double-Sided Popout Menu",docs:{description:{component:"Provides an app bar with popout menus on either side."}},references:[],argTypes:{title:{control:"text"}},layout:"fullscren"}};DoubleMenuSingleLayer.parameters={...DoubleMenuSingleLayer.parameters,docs:{...DoubleMenuSingleLayer.parameters?.docs,source:{originalSource:"(args: AppWrapperProps) => <AppWrapperComponent {...args}>\r\n    <p>Page Contents</p>\r\n  </AppWrapperComponent>",...DoubleMenuSingleLayer.parameters?.docs?.source}}},DoubleMenuDoubleLayer.parameters={...DoubleMenuDoubleLayer.parameters,docs:{...DoubleMenuDoubleLayer.parameters?.docs,source:{originalSource:"(args: any) => <AppWrapperComponent {...args.outer}>\r\n    <AppWrapperComponent {...args.inner}>\r\n      <p>Page Contents</p>\r\n    </AppWrapperComponent>\r\n  </AppWrapperComponent>",...DoubleMenuDoubleLayer.parameters?.docs?.source}}};const __namedExportsOrder=["DoubleMenuSingleLayer","DoubleMenuDoubleLayer"]},"./src/AppWrapper/HeaderFooter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HeaderFooter});var _Layout_CenterAlignedBox__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Layout/CenterAlignedBox.tsx"),_Theming_SwitchColorblind__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Theming/SwitchColorblind.tsx"),_Theming_SwitchDark__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Theming/SwitchDark.tsx"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/AppBar/AppBar.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),process=__webpack_require__("./node_modules/process/browser.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function HeaderFooter(_ref){var _components$center,_process$env$NEXT_PUB,_components$right,_ref$height=_ref.height,height=void 0===_ref$height?"2rem":_ref$height,_ref$footer=_ref.footer,footer=void 0!==_ref$footer&&_ref$footer,components=_ref.components;return __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{sx:{height,py:"1rem",justifySelf:footer?"end":"unset"},position:"static"},__jsx(_Layout_CenterAlignedBox__WEBPACK_IMPORTED_MODULE_1__.A,{left:null==components?void 0:components.left,center:null!==(_components$center=null==components?void 0:components.center)&&void 0!==_components$center?_components$center:__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,{variant:"subtitle1",fontWeight:"bolder",textAlign:"center"},null!==(_process$env$NEXT_PUB=process.env.NEXT_PUBLIC_APP_NAME)&&void 0!==_process$env$NEXT_PUB?_process$env$NEXT_PUB:"Application Name"),right:null!==(_components$right=null==components?void 0:components.right)&&void 0!==_components$right?_components$right:!footer&&__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_Theming_SwitchDark__WEBPACK_IMPORTED_MODULE_3__.A,null),__jsx(_Theming_SwitchColorblind__WEBPACK_IMPORTED_MODULE_2__.A,null))}))}HeaderFooter.displayName="HeaderFooter";try{HeaderFooter.displayName="HeaderFooter",HeaderFooter.__docgenInfo={description:"",displayName:"HeaderFooter",props:{footer:{defaultValue:{value:"false"},description:"",name:"footer",required:!1,type:{name:"boolean"}},height:{defaultValue:{value:"2rem"},description:"",name:"height",required:!1,type:{name:"string"}},components:{defaultValue:null,description:"",name:"components",required:!1,type:{name:"CenterAlignedBoxProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/AppWrapper/HeaderFooter.tsx#HeaderFooter"]={docgenInfo:HeaderFooter.__docgenInfo,name:"HeaderFooter",path:"src/AppWrapper/HeaderFooter.tsx#HeaderFooter"})}catch(__react_docgen_typescript_loader_error){}},"./src/Layout/CenterAlignedBox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>CenterAlignedBox});var _mui_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),__jsx=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement;function CenterAlignedBox(_ref){var left=_ref.left,center=_ref.center,right=_ref.right;return __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.A,{sx:{height:"100%",width:"100%",display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between",alignItems:"center"}},__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.A,{sx:{flex:"1 1 50%",display:"flex",alignItems:"center",minWidth:"25%"}},null!=left?left:" "),__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.A,{sx:{flex:"0 0 auto",minWidth:"50%"}},null!=center?center:" "),__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.A,{sx:{flex:"1 1 50%",display:"flex",justifyContent:"flex-end",alignItems:"center",minWidth:"25%"}},null!=right?right:" "))}CenterAlignedBox.displayName="CenterAlignedBox";try{CenterAlignedBox.displayName="CenterAlignedBox",CenterAlignedBox.__docgenInfo={description:"",displayName:"CenterAlignedBox",props:{left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ReactNode"}},center:{defaultValue:null,description:"",name:"center",required:!1,type:{name:"ReactNode"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Layout/CenterAlignedBox.tsx#CenterAlignedBox"]={docgenInfo:CenterAlignedBox.__docgenInfo,name:"CenterAlignedBox",path:"src/Layout/CenterAlignedBox.tsx#CenterAlignedBox"})}catch(__react_docgen_typescript_loader_error){}},"./src/Theming/SwitchColorblind.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>StyledSwitch});var C_Users_Jameson_Source_GT_Umbrella_jrg_jrg_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Switch/Switch.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),cookies_next__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/cookies-next/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_ThemeWrapper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Theming/ThemeWrapper.tsx"),process=__webpack_require__("./node_modules/process/browser.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,C_Users_Jameson_Source_GT_Umbrella_jrg_jrg_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var SwitchThemed=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.A)((function(_ref){var theme=_ref.theme;return{width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg' fill='%23".concat("dark"===theme.palette.mode?"FFF":"000","'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Ctitle%3Eaccessibility-blind%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='invisible_box' data-name='invisible box'%3E%3Crect width='48' height='48' fill='none'%3E%3C/rect%3E%3C/g%3E%3Cg id='icons_Q2' data-name='icons Q2'%3E%3Cg%3E%3Cpath d='M45.3,22.1C43.2,19.5,35.4,11,24,11a23,23,0,0,0-8.5,1.6L9.7,6.9A2,2,0,0,0,6.9,9.7L38.3,41.1a2,2,0,1,0,2.8-2.8l-4.7-4.8a32.1,32.1,0,0,0,8.9-7.6A3,3,0,0,0,45.3,22.1ZM33.4,30.6l-4-4A5.8,5.8,0,0,0,30,24a6,6,0,0,0-6-6,5.8,5.8,0,0,0-2.6.6l-2.8-2.8A19.1,19.1,0,0,1,24,15c8.8,0,15.3,6.2,17.7,9A29.7,29.7,0,0,1,33.4,30.6Z'%3E%3C/path%3E%3Cpath d='M10.4,17.6a2,2,0,0,0-2.8,2.8l15,15a2,2,0,0,0,2.8-2.8Z'%3E%3C/path%3E%3Cpath d='M5.4,22.6a1.9,1.9,0,0,0-2.8,0,1.9,1.9,0,0,0,0,2.8l7,7a2,2,0,0,0,2.8-2.8Z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")")},"& + .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===theme.palette.mode?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:"dark"===theme.palette.mode?"#000":"#FFF",width:32,height:32,"&:before":{content:"''",position:"absolute",width:"80%",height:"80%",left:"10%",top:"10%",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:"url(\"data:image/svg+xml,%3Csvg fill='%23".concat("dark"===theme.palette.mode?"FFF":"000","' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cpath d='M23,17a1,1,0,0,1-2,0A9,9,0,0,0,3,17a1,1,0,0,1-2,0,11,11,0,0,1,22,0ZM12,10a7.008,7.008,0,0,0-7,7,1,1,0,0,0,2,0,5,5,0,0,1,10,0,1,1,0,0,0,2,0A7.009,7.009,0,0,0,12,10Zm0,4a3,3,0,0,0-3,3,1,1,0,0,0,2,0,1,1,0,0,1,2,0,1,1,0,0,0,2,0A3,3,0,0,0,12,14Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\")")}},"& .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===theme.palette.mode?"#8796A5":"#aab4be",borderRadius:10}}}));function StyledSwitch(){var themeState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ThemeWrapper__WEBPACK_IMPORTED_MODULE_3__.Dx);return __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.A,{title:themeState.colorblind?"Switch to Coloured Mode":"Switch to Colorblind Mode"},__jsx(SwitchThemed,{checked:themeState.colorblind,onClick:function onClick(){themeState.mutate(_objectSpread(_objectSpread({},themeState),{},{colorblind:!themeState.colorblind}));var expiryDate=new Date;expiryDate.setDate(expiryDate.getDate()+365),(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookie)("colorblind",themeState.colorblind?"false":"true",{expires:expiryDate,domain:process.env.NEXT_PUBLIC_COOKIE_DOMAIN})}}))}StyledSwitch.displayName="StyledSwitch"},"./src/Theming/SwitchDark.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>StyledSwitch});var C_Users_Jameson_Source_GT_Umbrella_jrg_jrg_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Switch/Switch.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),cookies_next__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/cookies-next/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_ThemeWrapper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Theming/ThemeWrapper.tsx"),process=__webpack_require__("./node_modules/process/browser.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,C_Users_Jameson_Source_GT_Umbrella_jrg_jrg_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var SwitchThemed=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.A)((function(_ref){var theme=_ref.theme;return{width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>\')')},"& + .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===theme.palette.mode?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:theme.palette.colorblind?"dark"===theme.palette.mode?"#000":"#fff":"dark"===theme.palette.mode?"#003892":"#f0e70a",width:32,height:32,"&:before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#000"),'" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>\')')}},"& .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===theme.palette.mode?"#8796A5":"#aab4be",borderRadius:10}}}));function StyledSwitch(){var themeState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ThemeWrapper__WEBPACK_IMPORTED_MODULE_3__.Dx);return __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.A,{title:themeState.dark?"Switch to Light Mode":"Switch to Dark Mode"},__jsx(SwitchThemed,{checked:themeState.dark,onClick:function onClick(){themeState.mutate(_objectSpread(_objectSpread({},themeState),{},{dark:!themeState.dark}));var expiryDate=new Date;expiryDate.setDate(expiryDate.getDate()+365),(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookie)("dark",themeState.dark?"false":"true",{expires:expiryDate,domain:process.env.NEXT_PUBLIC_COOKIE_DOMAIN})}}))}StyledSwitch.displayName="StyledSwitch"}}]);