"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6362],{16362:function(t,e,i){var r=i(9249),n=i(87371),o=function(){function t(e,i){(0,r.Z)(this,t),this.low=e,this.high=i}return(0,n.Z)(t,[{key:"clone",value:function(){return new t(this.low,this.high)}},{key:"max",get:function(){return this.clone()}},{key:"less_than",value:function(t){return this.low<t.low||this.low==t.low&&this.high<t.high}},{key:"equal_to",value:function(t){return this.low==t.low&&this.high==t.high}},{key:"intersect",value:function(t){return!this.not_intersect(t)}},{key:"not_intersect",value:function(t){return this.high<t.low||t.high<this.low}},{key:"merge",value:function(e){return new t(void 0===this.low?e.low:Math.min(this.low,e.low),void 0===this.high?e.high:Math.max(this.high,e.high))}},{key:"output",value:function(){return[this.low,this.high]}}],[{key:"comparable_max",value:function(t,e){return t.merge(e)}},{key:"comparable_less_than",value:function(t,e){return t<e}}]),t}(),l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,h=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;(0,r.Z)(this,t),this.left=n,this.right=l,this.parent=a,this.color=h,this.item={key:e,value:i},e&&e instanceof Array&&2==e.length&&(Number.isNaN(e[0])||Number.isNaN(e[1])||(this.item.key=new o(Math.min(e[0],e[1]),Math.max(e[0],e[1])))),this.max=this.item.key?this.item.key.max:void 0}return(0,n.Z)(t,[{key:"isNil",value:function(){return void 0===this.item.key&&void 0===this.item.value&&null===this.left&&null===this.right&&1===this.color}},{key:"less_than",value:function(t){if(this.item.value===this.item.key&&t.item.value===t.item.key)return this.item.key.less_than(t.item.key);var e=this.item.value&&t.item.value&&this.item.value.less_than?this.item.value.less_than(t.item.value):this.item.value<t.item.value;return this.item.key.less_than(t.item.key)||this.item.key.equal_to(t.item.key)&&e}},{key:"equal_to",value:function(t){if(this.item.value===this.item.key&&t.item.value===t.item.key)return this.item.key.equal_to(t.item.key);var e=this.item.value&&t.item.value&&this.item.value.equal_to?this.item.value.equal_to(t.item.value):this.item.value==t.item.value;return this.item.key.equal_to(t.item.key)&&e}},{key:"intersect",value:function(t){return this.item.key.intersect(t.item.key)}},{key:"copy_data",value:function(t){this.item.key=t.item.key,this.item.value=t.item.value}},{key:"update_max",value:function(){if(this.max=this.item.key?this.item.key.max:void 0,this.right&&this.right.max){var t=this.item.key.constructor.comparable_max;this.max=t(this.max,this.right.max)}if(this.left&&this.left.max){var e=this.item.key.constructor.comparable_max;this.max=e(this.max,this.left.max)}}},{key:"not_intersect_left_subtree",value:function(t){return(0,this.item.key.constructor.comparable_less_than)(void 0!==this.left.max.high?this.left.max.high:this.left.max,t.item.key.low)}},{key:"not_intersect_right_subtree",value:function(t){var e=this.item.key.constructor.comparable_less_than,i=void 0!==this.right.max.low?this.right.max.low:this.right.item.key.low;return e(t.item.key.high,i)}}]),t}(),a=function(){function t(){(0,r.Z)(this,t),this.root=null,this.nil_node=new l}return(0,n.Z)(t,[{key:"size",get:function(){var t=0;return this.tree_walk(this.root,(function(){return t++})),t}},{key:"keys",get:function(){var t=[];return this.tree_walk(this.root,(function(e){return t.push(e.item.key.output?e.item.key.output():e.item.key)})),t}},{key:"values",get:function(){var t=[];return this.tree_walk(this.root,(function(e){return t.push(e.item.value)})),t}},{key:"items",get:function(){var t=[];return this.tree_walk(this.root,(function(e){return t.push({key:e.item.key.output?e.item.key.output():e.item.key,value:e.item.value})})),t}},{key:"isEmpty",value:function(){return null==this.root||this.root==this.nil_node}},{key:"clear",value:function(){this.root=null}},{key:"insert",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;if(void 0!==t){var i=new l(t,e,this.nil_node,this.nil_node,null,0);return this.tree_insert(i),this.recalc_max(i),i}}},{key:"exist",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=new l(t,e);return!!this.tree_search(this.root,i)}},{key:"remove",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=new l(t,e),r=this.tree_search(this.root,i);return r&&this.tree_delete(r),r}},{key:"search",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t,e){return t===e?e.output():t},i=new l(t),r=[];return this.tree_search_interval(this.root,i,r),r.map((function(t){return e(t.item.value,t.item.key)}))}},{key:"intersect_any",value:function(t){var e=new l(t);return this.tree_find_any_interval(this.root,e)}},{key:"forEach",value:function(t){this.tree_walk(this.root,(function(e){return t(e.item.key,e.item.value)}))}},{key:"map",value:function(e){var i=new t;return this.tree_walk(this.root,(function(t){return i.insert(t.item.key,e(t.item.value,t.item.key))})),i}},{key:"recalc_max",value:function(t){for(var e=t;null!=e.parent;)e.parent.update_max(),e=e.parent}},{key:"tree_insert",value:function(t){var e=this.root,i=null;if(null==this.root||this.root==this.nil_node)this.root=t;else{for(;e!=this.nil_node;)i=e,e=t.less_than(e)?e.left:e.right;t.parent=i,t.less_than(i)?i.left=t:i.right=t}this.insert_fixup(t)}},{key:"insert_fixup",value:function(t){var e,i;for(e=t;e!=this.root&&0==e.parent.color;)e.parent==e.parent.parent.left?0==(i=e.parent.parent.right).color?(e.parent.color=1,i.color=1,e.parent.parent.color=0,e=e.parent.parent):(e==e.parent.right&&(e=e.parent,this.rotate_left(e)),e.parent.color=1,e.parent.parent.color=0,this.rotate_right(e.parent.parent)):0==(i=e.parent.parent.left).color?(e.parent.color=1,i.color=1,e.parent.parent.color=0,e=e.parent.parent):(e==e.parent.left&&(e=e.parent,this.rotate_right(e)),e.parent.color=1,e.parent.parent.color=0,this.rotate_left(e.parent.parent));this.root.color=1}},{key:"tree_delete",value:function(t){var e,i;(i=(e=t.left==this.nil_node||t.right==this.nil_node?t:this.tree_successor(t)).left!=this.nil_node?e.left:e.right).parent=e.parent,e==this.root?this.root=i:(e==e.parent.left?e.parent.left=i:e.parent.right=i,e.parent.update_max()),this.recalc_max(i),e!=t&&(t.copy_data(e),t.update_max(),this.recalc_max(t)),1==e.color&&this.delete_fixup(i)}},{key:"delete_fixup",value:function(t){for(var e,i=t;i!=this.root&&null!=i.parent&&1==i.color;)i==i.parent.left?(0==(e=i.parent.right).color&&(e.color=1,i.parent.color=0,this.rotate_left(i.parent),e=i.parent.right),1==e.left.color&&1==e.right.color?(e.color=0,i=i.parent):(1==e.right.color&&(e.color=0,e.left.color=1,this.rotate_right(e),e=i.parent.right),e.color=i.parent.color,i.parent.color=1,e.right.color=1,this.rotate_left(i.parent),i=this.root)):(0==(e=i.parent.left).color&&(e.color=1,i.parent.color=0,this.rotate_right(i.parent),e=i.parent.left),1==e.left.color&&1==e.right.color?(e.color=0,i=i.parent):(1==e.left.color&&(e.color=0,e.right.color=1,this.rotate_left(e),e=i.parent.left),e.color=i.parent.color,i.parent.color=1,e.left.color=1,this.rotate_right(i.parent),i=this.root));i.color=1}},{key:"tree_search",value:function(t,e){if(null!=t&&t!=this.nil_node)return e.equal_to(t)?t:e.less_than(t)?this.tree_search(t.left,e):this.tree_search(t.right,e)}},{key:"tree_search_interval",value:function(t,e,i){null!=t&&t!=this.nil_node&&(t.left==this.nil_node||t.not_intersect_left_subtree(e)||this.tree_search_interval(t.left,e,i),t.intersect(e)&&i.push(t),t.right==this.nil_node||t.not_intersect_right_subtree(e)||this.tree_search_interval(t.right,e,i))}},{key:"tree_find_any_interval",value:function(t,e){var i=!1;return null!=t&&t!=this.nil_node&&(t.left==this.nil_node||t.not_intersect_left_subtree(e)||(i=this.tree_find_any_interval(t.left,e)),i||(i=t.intersect(e)),i||t.right==this.nil_node||t.not_intersect_right_subtree(e)||(i=this.tree_find_any_interval(t.right,e))),i}},{key:"local_minimum",value:function(t){for(var e=t;null!=e.left&&e.left!=this.nil_node;)e=e.left;return e}},{key:"local_maximum",value:function(t){for(var e=t;null!=e.right&&e.right!=this.nil_node;)e=e.right;return e}},{key:"tree_successor",value:function(t){var e,i,r;if(t.right!=this.nil_node)e=this.local_minimum(t.right);else{for(i=t,r=t.parent;null!=r&&r.right==i;)i=r,r=r.parent;e=r}return e}},{key:"rotate_left",value:function(t){var e=t.right;t.right=e.left,e.left!=this.nil_node&&(e.left.parent=t),e.parent=t.parent,t==this.root?this.root=e:t==t.parent.left?t.parent.left=e:t.parent.right=e,e.left=t,t.parent=e,null!=t&&t!=this.nil_node&&t.update_max(),null!=(e=t.parent)&&e!=this.nil_node&&e.update_max()}},{key:"rotate_right",value:function(t){var e=t.left;t.left=e.right,e.right!=this.nil_node&&(e.right.parent=t),e.parent=t.parent,t==this.root?this.root=e:t==t.parent.left?t.parent.left=e:t.parent.right=e,e.right=t,t.parent=e,null!=t&&t!=this.nil_node&&t.update_max(),null!=(e=t.parent)&&e!=this.nil_node&&e.update_max()}},{key:"tree_walk",value:function(t,e){null!=t&&t!=this.nil_node&&(this.tree_walk(t.left,e),e(t),this.tree_walk(t.right,e))}},{key:"testRedBlackProperty",value:function(){var t=!0;return this.tree_walk(this.root,(function(e){0==e.color&&(1==e.left.color&&1==e.right.color||(t=!1))})),t}},{key:"testBlackHeightProperty",value:function(t){var e=0,i=0;if(1==t.color&&e++,(i=t.left!=this.nil_node?this.testBlackHeightProperty(t.left):1)!=(t.right!=this.nil_node?this.testBlackHeightProperty(t.right):1))throw new Error("Red-black height property violated");return e+=i}}]),t}();e.ZP=a}}]);
//# sourceMappingURL=6362.21a301b0.chunk.js.map