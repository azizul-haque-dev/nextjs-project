import Image from "next/image";
import Link from "next/link";
import AvatarImg from "../../assets/avatar/avatar-1.png";
import FeaturedImg from "../../assets/images/8400a044-9788-42d9-abe8-6c3c865d36db.png";

function FeaturedNews() {
  return (
    <section className="mb-12">
      <article className="bg-white rounded-lg shadow-sm overflow-hidden news-card">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="order-2 lg:order-1 p-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="px-3 py-1 bg-black text-white text-xs rounded-full">
                Featured
              </span>
              <span className="text-sm text-gray-600">5 min read</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-normal leading-tight mb-4">
              The Future of Sustainable Energy: A Global Perspective
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As nations worldwide commit to carbon neutrality, renewable energy
              sources are becoming the cornerstone of economic policy. This
              comprehensive analysis explores the challenges and opportunities
              ahead.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full">
                  <Image
                    width={100}
                    height={100}
                    src={AvatarImg}
                    alt="Sarah Chen"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">Sarah Chen</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <Link
                href="#"
                className="text-sm hover:text-gray-600 transition-colors"
              >
                Read more →
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              width={100}
              height={246}
              src={FeaturedImg}
              alt="Sustainable energy"
              className="w-full h-64 lg:h-full object-cover"
            />
          </div>
        </div>
      </article>
    </section>
  );
}

export default FeaturedNews;
