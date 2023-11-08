export const subDomain = () => {
    let url = window.location.host;
    // REMOVE LEADING AND TRAILING WHITE SPACE
    url = url.replace(new RegExp(/^\s+/), ''); // START
    url = url.replace(new RegExp(/\s+$/), ''); // END

    // CONVERT BACK SLASHES TO FORWARD SLASHES
    url = url.replace(new RegExp(/\\/g), '/');

    // REMOVES 'www.' FROM THE START OF THE STRING
    url = url.replace(new RegExp(/^www\./i), '');

    // REMOVE STRING FROM FIRST FORWARD SLASH ON
    url = url.replace(new RegExp(/\/(.*)/), '');

    // REMOVES '.??.??' OR '.???.??' FROM END - e.g. '.CO.UK', '.COM.AU'
    if (url.match(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i))) {
        url = url.replace(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i), '');

        // REMOVES '.??' or '.???' or '.????' FROM END - e.g. '.US', '.COM', '.INFO'
    } else if (url.match(new RegExp(/\.[a-z]{2,4}$/i))) {
        url = url.replace(new RegExp(/\.[a-z]{2,4}$/i), '');
    }

    // CHECK TO SEE IF THERE IS A DOT '.' LEFT
    var subDomain = url.match(new RegExp(/\./g)) ? true : false;

    return subDomain;
};
