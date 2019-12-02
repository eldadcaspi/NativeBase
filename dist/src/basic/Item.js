Object.defineProperty(exports,"__esModule",{value:true});exports.Item=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/basic/Item.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _lodash=require('lodash');var _nativeBaseShoutemTheme=require('native-base-shoutem-theme');var _platform=require('../theme/variables/platform');var _platform2=_interopRequireDefault(_platform);var _computeProps=require('../utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);var _mapPropsToStyleNames=require('../utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);var _Input=require('./Input');var _Label=require('./Label');var _Icon=require('./Icon');var _Thumbnail=require('./Thumbnail');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Item=function(_Component){_inherits(Item,_Component);function Item(props){_classCallCheck(this,Item);var _this=_possibleConstructorReturn(this,(Item.__proto__||Object.getPrototypeOf(Item)).call(this,props));_this.state={isFocussed:true,text:'',topAnim:new _reactNative.Animated.Value(18),opacAnim:new _reactNative.Animated.Value(1)};return _this;}_createClass(Item,[{key:'componentDidMount',value:function componentDidMount(){if(this.props.floatingLabel){if(this.inputProps&&this.inputProps.value){this.floatUp(-16);}if(this.inputProps&&this.inputProps.getRef)this.inputProps.getRef(this._inputRef);}}},{key:'UNSAFE_componentWillReceiveProps',value:function UNSAFE_componentWillReceiveProps(nextProps){var _this2=this;var childrenArray=_react2.default.Children.toArray(nextProps.children);(0,_lodash.remove)(childrenArray,function(item){if(item.type.displayName==='Styled(Input)'){_this2.inputProps=item.props;return item;}return null;});if(this.props.floatingLabel){if(this.inputProps&&this.inputProps.value){this.setState({isFocused:true});this.floatUp(-16);}if(this.inputProps&&this.inputProps.getRef)this.inputProps.getRef(this._inputRef);}}},{key:'getInitialStyle',value:function getInitialStyle(){return{roundedInputGroup:{borderWidth:this.props.rounded?_platform2.default.borderWidth*2:undefined,borderRadius:this.props.rounded?_platform2.default.inputGroupRoundedBorderRadius:undefined}};}},{key:'getPlacholderValue',value:function getPlacholderValue(inputProps){var placeholderValue=void 0;if((0,_lodash.isArray)(this.props.children)&&this.props.children[0].props.children){placeholderValue=null;}else{placeholderValue=inputProps.placeholder;}return placeholderValue;}},{key:'floatBack',value:function floatBack(e){_reactNative.Animated.timing(this.state.topAnim,{toValue:e||18,duration:150}).start();_reactNative.Animated.timing(this.state.opacAnim,{toValue:1,duration:150}).start();}},{key:'floatUp',value:function floatUp(e){_reactNative.Animated.timing(this.state.topAnim,{toValue:e||-22,duration:150}).start();_reactNative.Animated.timing(this.state.opacAnim,{toValue:0.7,duration:150}).start();}},{key:'prepareRootProps',value:function prepareRootProps(){var defaultProps={style:this.getInitialStyle().roundedInputGroup};return(0,_computeProps2.default)(this.props,defaultProps);}},{key:'renderChildren',value:function renderChildren(){var _this3=this;var newChildren=[];var childrenArray=_react2.default.Children.toArray(this.props.children);var label=[];var labelProps={};label=(0,_lodash.remove)(childrenArray,function(item){if(item.type===_Label.Label){labelProps=item.props;return item;}return null;});var inputProps={};(0,_lodash.remove)(childrenArray,function(item){if(item.type===_Input.Input){inputProps=item.props;_this3.inputProps=item.props;return item;}return null;});var icon=[];var iconProps={};icon=(0,_lodash.remove)(childrenArray,function(item){if(item.type===_Icon.Icon){iconProps=item.props;return item;}return null;});var image=[];image=(0,_lodash.remove)(childrenArray,function(item){if(item.type===_Thumbnail.Thumbnail){return item;}return null;});if(this.props.floatingLabel&&icon.length){var flag=true;var isIcon=false;for(var i=0;i<this.props.children.length;i++){if(this.props.children[i].props.name&&this.props.children[i].type.displayName!=='Styled(Input)'){isIcon=true;newChildren.push(_react2.default.createElement(_Icon.Icon,_extends({key:[i]},this.props.children[i].props,{__source:{fileName:_jsxFileName,lineNumber:174}})));}if((this.props.children[i].props.children||this.props.children[i].props.placeholder)&&flag){flag=false;newChildren.push(_react2.default.createElement(_reactNative.Animated.View,{key:'float',style:{position:'absolute',left:this.props.last&&isIcon?40:this.props.last?15:isIcon?26:0,right:0,top:this.state.topAnim,opacity:this.state.opacAnim,paddingTop:_reactNative.Platform.OS==='ios'?undefined:undefined,paddingBottom:_reactNative.Platform.OS==='ios'?undefined:12},__source:{fileName:_jsxFileName,lineNumber:186}},_react2.default.createElement(_Label.Label,_extends({},labelProps,{__source:{fileName:_jsxFileName,lineNumber:205}}),this.renderLabel(label,labelProps))));newChildren.push(_react2.default.createElement(_Input.Input,_extends({ref:function ref(c){return _this3._inputRef=c;},key:'l2'},inputProps,{placeholder:this.getPlacholderValue(inputProps),onFocus:function onFocus(){_this3.setState({isFocused:true});if(inputProps.onFocus){inputProps.onFocus();}},onBlur:function onBlur(e){if(inputProps.value){_this3.setState({isFocused:true});}else if(!_this3.state.text.length){_this3.setState({isFocused:false});}if(inputProps.onBlur){inputProps.onBlur(e);}},onChangeText:function onChangeText(text){_this3.setState({text:text});if(inputProps.onChangeText){inputProps.onChangeText(text);}},__source:{fileName:_jsxFileName,lineNumber:212}})));}}}else if(this.props.floatingLabel&&image.length){var isImage=false;for(var _i=0;_i<this.props.children.length;_i++){if(this.props.children[_i].type.displayName==='Styled(Thumbnail)'){isImage=true;newChildren.push(_react2.default.createElement(_Thumbnail.Thumbnail,_extends({small:true,key:[_i]},this.props.children[_i].props,{style:{right:10,left:_i===this.props.children.length-1?undefined:0},__source:{fileName:_jsxFileName,lineNumber:253}})));}if(this.props.children[_i].props.children){newChildren.push(_react2.default.createElement(_reactNative.Animated.View,{key:'float',style:{position:'absolute',left:this.props.last&&isImage?57:this.props.last?15:isImage?42:0,right:0,top:this.state.topAnim,opacity:this.state.opacAnim,paddingTop:_reactNative.Platform.OS==='ios'?undefined:undefined,paddingBottom:_reactNative.Platform.OS==='ios'?undefined:12},__source:{fileName:_jsxFileName,lineNumber:267}},_react2.default.createElement(_Label.Label,_extends({},labelProps,{__source:{fileName:_jsxFileName,lineNumber:286}}),this.renderLabel(label,labelProps))));newChildren.push(_react2.default.createElement(_Input.Input,_extends({ref:function ref(c){return _this3._inputRef=c;},key:'l2'},inputProps,{placeholder:this.getPlacholderValue(inputProps),onFocus:function onFocus(){_this3.setState({isFocused:true});inputProps.onFocus&&inputProps.onFocus();},onBlur:function onBlur(e){inputProps.value?_this3.setState({isFocused:true}):!_this3.state.text.length&&_this3.setState({isFocused:false});inputProps.onBlur&&inputProps.onBlur(e);},onChangeText:function onChangeText(text){_this3.setState({text:text});inputProps.onChangeText&&inputProps.onChangeText(text);},style:{left:this.props.last&&isImage?10:this.props.last?4:isImage?10:0,marginRight:12},__source:{fileName:_jsxFileName,lineNumber:293}})));}}}else if(this.props.floatingLabel){newChildren.push(_react2.default.createElement(_reactNative.Animated.View,{key:'float',style:{position:'absolute',left:this.props.last?15:0,right:0,top:this.state.topAnim,opacity:this.state.opacAnim,paddingTop:_reactNative.Platform.OS==='ios'?undefined:undefined,paddingBottom:_reactNative.Platform.OS==='ios'?undefined:12},__source:{fileName:_jsxFileName,lineNumber:330}},_react2.default.createElement(_Label.Label,_extends({},labelProps,{__source:{fileName:_jsxFileName,lineNumber:342}}),this.renderLabel(label,labelProps))));newChildren.push(_react2.default.createElement(_Input.Input,_extends({ref:function ref(c){return _this3._inputRef=c;},value:this.state.text,key:'l2'},inputProps,{placeholder:this.getPlacholderValue(inputProps),onFocus:function onFocus(){_this3.setState({isFocused:true});inputProps.onFocus&&inputProps.onFocus();},onBlur:function onBlur(e){inputProps.value?_this3.setState({isFocused:true}):!_this3.state.text.length&&_this3.setState({isFocused:false});inputProps.onBlur&&inputProps.onBlur(e);},onChangeText:function onChangeText(text){_this3.setState({text:text});inputProps.onChangeText&&inputProps.onChangeText(text);},__source:{fileName:_jsxFileName,lineNumber:347}})));}else if(this.props.stackedLabel&&icon.length){newChildren.push(_react2.default.createElement(_reactNative.View,{key:'s',style:{flexDirection:'row',flex:1,width:_platform2.default.deviceWidth-15},__source:{fileName:_jsxFileName,lineNumber:371}},_react2.default.createElement(_Icon.Icon,_extends({key:'s1'},iconProps,{__source:{fileName:_jsxFileName,lineNumber:379}})),_react2.default.createElement(_reactNative.View,{style:{flexDirection:'column'},__source:{fileName:_jsxFileName,lineNumber:380}},_react2.default.createElement(_Label.Label,_extends({key:'s2'},labelProps,{__source:{fileName:_jsxFileName,lineNumber:381}})),_react2.default.createElement(_Input.Input,_extends({key:'s3'},inputProps,{style:{width:_platform2.default.deviceWidth-40},__source:{fileName:_jsxFileName,lineNumber:382}})))));}else{return this.props.children;}return newChildren;}},{key:'renderLabel',value:function renderLabel(label,labelProps){var newLabel=[];var labelStyle=_reactNative.StyleSheet.flatten([{fontSize:15,lineHeight:30},labelProps.style]);if(this.props.floatingLabel){if(this.state.isFocused){newLabel.push(_react2.default.createElement(_Label.Label,_extends({},labelProps,{key:'newFLabel',float:true,style:labelStyle})));this.floatUp(-16);}else{newLabel.push(label);this.floatBack(labelProps.floatBack);}}else{newLabel.push(_react2.default.createElement(_Label.Label,_extends({},labelProps,{key:'newLabel'})));}return newLabel;}},{key:'render',value:function render(){var _this4=this;return _react2.default.createElement(_reactNative.TouchableOpacity,_extends({ref:function ref(c){return _this4._root=c;}},this.prepareRootProps(),{activeOpacity:1,__source:{fileName:_jsxFileName,lineNumber:430}}),this.renderChildren());}}]);return Item;}(_react.Component);Item.propTypes=_extends({},_reactNative.TouchableOpacity.propTypes,{style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array]),inlineLabel:_propTypes2.default.bool,floatingLabel:_propTypes2.default.bool,stackedLabel:_propTypes2.default.bool,fixedLabel:_propTypes2.default.bool,success:_propTypes2.default.bool,error:_propTypes2.default.bool});var StyledItem=(0,_nativeBaseShoutemTheme.connectStyle)('NativeBase.Item',{},_mapPropsToStyleNames2.default)(Item);exports.Item=StyledItem;
//# sourceMappingURL=Item.js.map