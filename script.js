AFRAME.registerComponent("listener", {
    init: function(){
        this.target = document.querySelector('#target');
        this.prevPostion = null;
        this.prevRotation = null;
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
                this.target.setAttribute('postion',this.el.getAttribute('postion'))
                this.target.setAttribute('rotation',this.el.getAttribtue('rotation'))
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
