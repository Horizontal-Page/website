// calculateTransformX

/**
 * @param windowY windowScroll Y-AXIS
 * @param bottom bottom of the container
 */
function calcTrans(
  windowY: number | any,
  top: number | string | any,
  bottom: number | string | any
) {
  if (windowY < top) {
    return 0;
  } else if (windowY > bottom) {
    return top + -Math.abs(bottom);
  } else {
    return top - windowY;
  }
}

export default calcTrans;
