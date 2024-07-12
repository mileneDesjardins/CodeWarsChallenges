// Description
// You have clothes international size as text (xs, s, xxl).
// Your goal is to return European number size as a number from that size.

// Notice that there is arbitrary amount of modifiers (x), excluding m size, and input can be any string.

// Linearity
// Base size for medium (m) is 38.
// (then, small (s) is 36, and large (l) is 40)

// The scale is linear; modifier x continues that by adding or subtracting 2 from resulting size.

// (For sizes where x modifier makes total size negative, treat that as OK, and return negative size)

// Invalid cases
// Function should handle wrong/invalid sizes.

// Valid input has any base size (s/m/l) and any amount of modifiers (x) before base size (like xxl).
// Notice that you cannot apply modifier for m size, consider that case as invalid!
// Anything else is disallowed and should be considered as invalid (None for Python, 0, false for Go, null for JavaScript).

// Invalid examples: xxx, sss, xm, other string

// Valid Examples
// xs: 34
// s: 36
// m: 38
// l: 40
// xl: 42

function sizeToNumber(size) {
  let number;
  let small = 36;
  let medium = small + 2;
  let large = medium + 2;
  let numberOfX;

  switch (size) {
    case "s":
      number = small;
      break;
    case "m":
      number = medium;
      break;
    case "l":
      number = large;
      break;
    default:
      if (size.includes("x")) {
        numberOfX = size.split("x").length - 1;
        if (size.includes("s")) {
          number = small - numberOfX * 2;
        } else if (size.includes("l")) {
          number = large + numberOfX * 2;
        }
        break;
      }
  }

  return number ?? null;
}

//Best practice
function sizeToNumber(size) {
  if (size == "s") return 36;
  if (size == "m") return 38;
  if (size == "l") return 40;
  const x = size.match(/x/g)?.length;
  if (/^x+s$/.test(size)) return 36 - x * 2;
  if (/^x+l$/.test(size)) return 40 + x * 2;
  return null;
}
