// calculateTransformX

// container of horizontal
interface oby {
  top: number | string | any;
  bottom: number | string | any;
  maxtransform: number | string | any;
}

function calcTrans(oby: oby) {
  const c =
    Math.abs((oby.top - window.scrollY) / (oby.bottom - window.innerHeight)) *
    oby.maxtransform;
  if (window.scrollY < oby.top) {
    return 0;
  } else if (window.scrollY > oby.bottom) {
    return oby.maxtransform;
  } else {
    return c;
  }
}

export default calcTrans;
