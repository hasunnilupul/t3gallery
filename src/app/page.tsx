import Link from "next/link";

const mockUrls = [
  "https://vgzdi8ujxb.ufs.sh/f/cqhHIWkTqS2E7AzxwKMnkWeVFzrY4xmITJaR1SMEyoU2t7DQ",
  "https://vgzdi8ujxb.ufs.sh/f/cqhHIWkTqS2EnrOKfqiQ1XT0MSm28rJACYgGv3s6OpKlcDRt",
  "https://vgzdi8ujxb.ufs.sh/f/cqhHIWkTqS2Eou1FZdyEyCuW1tJPO0eEhrm94wNH8LdbxVin",
  "https://vgzdi8ujxb.ufs.sh/f/cqhHIWkTqS2EifbnvZuwqQ8TBtHDMVz2LeCpymxFgdlhRPbJ",
  "https://vgzdi8ujxb.ufs.sh/f/cqhHIWkTqS2Eou6BOBwEyCuW1tJPO0eEhrm94wNH8LdbxVin",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {
          mockImages.map(img => (
            <div className="w-48 p-4" key={img.id}>
              <img src={img.url}/>
            </div>
          ))
        }
      </div>
    </main>
  );
}
