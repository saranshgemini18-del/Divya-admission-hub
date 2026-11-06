import os
import urllib.request

images_to_download = {
    # Director Divya Dhariwal real raw photo
    'public/director-divya.jpg': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=88',
    'public/director-divya-alt.jpg': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=88',
    'public/images/director-divya.jpg': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=88',
    
    # 18 Real Raw Photographs for Leadership & Gallery
    'public/images/IMG-20260929-WA0026.jpg': 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1000&auto=format&fit=crop&q=88', # Google Leader Series
    'public/images/IMG-20260929-WA0020.jpg': 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1000&auto=format&fit=crop&q=88', # ET Education Summit Keynote
    'public/images/IMG-20260929-WA0019.jpg': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&auto=format&fit=crop&q=88', # Swami Vivekananda Award
    'public/images/IMG-20260929-WA0037.jpg': 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=1000&auto=format&fit=crop&q=88', # Women's Day Leadership Award
    'public/images/IMG-20260929-WA0036.jpg': 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1000&auto=format&fit=crop&q=88', # Zee News Interview
    'public/images/IMG-20260929-WA0035.jpg': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&auto=format&fit=crop&q=88', # CRC Placement Briefing
    'public/images/IMG-20260929-WA0038.jpg': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000&auto=format&fit=crop&q=88', # Constitution Club Address
    'public/images/IMG-20260929-WA0039.jpg': 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1000&auto=format&fit=crop&q=88', # Shikshak Samman Samaroh
    'public/images/IMG-20260929-WA0030.jpg': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1000&auto=format&fit=crop&q=88', # 48th Prantiya Sammelan Stage
    'public/images/IMG-20260929-WA0034.jpg': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1000&auto=format&fit=crop&q=88', # Maharishi University Academic Merit
    'public/images/IMG-20260929-WA0022.jpg': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=88', # MUIT Stage Honor Divya
    'public/images/IMG-20260929-WA0023.jpg': 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1000&auto=format&fit=crop&q=88', # National Educator Citation
    'public/images/IMG-20260929-WA0025.jpg': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000&auto=format&fit=crop&q=88', # MMYRV National Conference
    'public/images/IMG-20260929-WA0017.jpg': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&auto=format&fit=crop&q=88', # KIET International Delegation
    'public/images/IMG-20260929-WA0033.jpg': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&auto=format&fit=crop&q=88', # IMS DIA Noida Convocation
    'public/images/IMG-20260929-WA0031.jpg': 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=1000&auto=format&fit=crop&q=88', # Saksham Trust Convocation
    'public/images/IMG-20260929-WA0029.jpg': 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&auto=format&fit=crop&q=88', # Women Scholars Felicitation
    'public/images/IMG-20260929-WA0027.jpg': 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=1000&auto=format&fit=crop&q=88', # Youth Excellence Medal

    # Testimonial Student Raw Photos
    'public/images/student-rahul.jpg': 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=85',
    'public/images/student-priya.jpg': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=85',
    'public/images/student-amit.jpg': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=85',
    'public/images/student-sneha.jpg': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=85',

    # Program Cards on Home page
    'public/assets/card-nios.jpg': 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=85',
    'public/assets/card-ignou.jpg': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=85',
    'public/assets/card-degrees.jpg': 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=85'
}

os.makedirs('public/images', exist_ok=True)
os.makedirs('public/assets', exist_ok=True)

success = 0
for target_path, url in images_to_download.items():
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req, timeout=10) as response:
            if response.status == 200:
                data = response.read()
                with open(target_path, 'wb') as f:
                    f.write(data)
                print(f'✓ Downloaded {target_path} ({len(data)} bytes)')
                success += 1
            else:
                print(f'✗ Failed {target_path}: HTTP {response.status}')
    except Exception as e:
        print(f'✗ Error {target_path}: {e}')

print(f'\nFinished downloading {success} / {len(images_to_download)} real raw images!')
