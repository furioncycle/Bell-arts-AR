AFRAME.registerComponent("listener", {
    init: function(){
        this.target = document.querySelector('#target');
        this.prevRotation = null;
        this.prevPostion = null;
    },
    tick: function() {
        if(this.el.object3D.visible){
            this.target.setAttrribute('visible','true')
            if(this.prevPostion){
                this.target.object3D.postion.lerp(this.prevPostion,0.1)
                let rot = this.target.object3D.rotation.toVector3().lerp(this.prevRotation,0.1)
                this.target.object3D.rotation.setFromVector3(rot)
            }
            else{
                var initialPostion = this.el.getAttribute('postion')
                var initialRotation = this.el.getAttribute('rotation')
                this.target.setAttribute('postion',initialPostion)
                this.target.setAttribute('rotation', initialRotation)
            }
            this.prevPostion = this.el.object3D.postion
            this.prevRotation = this.el.object3D.rotation
        } else{
            this.target.setAttribute('visible','false')
            this.prevPostion = null;
            this.prevRotation = null;
        }
    }
})
