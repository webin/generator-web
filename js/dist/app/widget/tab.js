define(["jquery","transition"],function(e){function n(t){this.element=e(t)}function r(r){return this.each(function(){var i=e(this),s=t.substring(1),o=i.data(s);o||i.data(t,o=new n(this)),typeof r=="string"&&o[r]()})}var t=".my.tab";n.TRANSITION_DURATION=100,n.prototype={show:function(){var n=this.element,r=n.closest("ul:not(.dropdown-menu)"),i=n.data("target");i||(i=n.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,""));if(n.parent("li").hasClass("active"))return;var s=r.find(".active:last a"),o=e.Event("hide"+t,{relatedTarget:n[0]}),u=e.Event("show"+t,{relatedTarget:s[0]});s.trigger(o),n.trigger(u);if(u.isDefaultPrevented()||o.isDefaultPrevented())return;var a=e(i);this.activate(n.closest("li"),r),this.activate(a,a.parent(),function(){s.trigger({type:"hidden"+t,relatedTarget:n[0]}),n.trigger({type:"shown"+t,relatedTarget:s[0]})})},hide:function(){},activate:function(t,r,i){function u(){s.removeClass("active"),t.addClass("active"),t[0].offsetWidth,t.addClass("in"),i&&i()}var s=r.find("> .active"),o=i&&e.support.transition&&(s.length&&s.hasClass("fade")||!!r.find("> .fade").length);s.length&&o?s.one("bsTransitionEnd",u).emulateTransitionEnd(n.TRANSITION_DURATION):u(),s.removeClass("in")}},e.fn.tab=r,e.fn.tab.Constructor=n;var i=function(t){t.preventDefault(),r.call(e(this),"show")};return e(document).on("click"+t+".data-api",'[data-toggle="tab"]',i),e});