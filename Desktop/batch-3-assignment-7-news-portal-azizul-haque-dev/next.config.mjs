/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "nation.com" },
      { protocol: "https", hostname: "zephyrnet.com" },
      { protocol: "https", hostname: "men.gsstatic.es" },
      { protocol: "https", hostname: "uh.gsstatic.es" },
      { protocol: "https", hostname: "static.ffx.io" },
      { protocol: "https", hostname: "www.digitaljournal.com" },
      { protocol: "https", hostname: "www.yankodesign.com" },
      { protocol: "https", hostname: "static.fireant.vn" },
      { protocol: "https", hostname: "www.techspot.com" },
      { protocol: "https", hostname: "newsatcl-pctr.c.yimg.jp" },
      { protocol: "https", hostname: "img.digitimes.com" },
      { protocol: "https", hostname: "www.slashgear.com" },
      { protocol: "https", hostname: "www.jamaicaobserver.com" },
      { protocol: "https", hostname: "ewscripps.brightspotcdn.com" },
      { protocol: "https", hostname: "cdn.cloudflare.steamstatic.com" },
      { protocol: "https", hostname: "assets.zerohedge.com" },
      { protocol: "https", hostname: "assets.nst.com.my" },
      { protocol: "https", hostname: "www.odt.co.nz" },
      { protocol: "https", hostname: "koreabizwire.com" },
      { protocol: "https", hostname: "www.travelandtourworld.com" },
      { protocol: "https", hostname: "www.nation.com.pk" },
      { protocol: "http", hostname: "koreabizwire.com" },
      { protocol: "https", hostname: "hydrogen-central.com" },
      { protocol: "https", hostname: "media.assettype.com" },
      { protocol: "https", hostname: "techau.com.au" },
      { protocol: "https", hostname: "cassette.sphdigital.com.sg" },
      { protocol: "http", hostname: "island.lk" },
      { protocol: "https", hostname: "upload.wikimedia.org" }
    ]
  }
};

export default nextConfig;
